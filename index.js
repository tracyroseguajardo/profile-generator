//Packages
const inquirer = require("inquirer");
const rx = require("rx")
const fs = require("fs");
//const generateHTML = require("./generateHTML")
const path = require("path")

const validation = (input) => {
    if (input !== "") {
        return true;
    }
    return "Please enter a response"
}

//Profile Questions
const prompts = new Rx.Subject();
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "managerName",
        validate: validation   
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "managerID",
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "managerEmail",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "managerOffice",
    },
]

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "engineerName",
        validate: validation   
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "engineerID",
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "engineerEmail",
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "engineerUsername",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName",
        validate: validation, 
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "internID",
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "internEmail",
    },
    {
        type: "input",
        message: "Where does the intern go to school?",
        name: "internSchool",
    },
]

const menu = [
    {
        type: "list",
        message: "Choose option",
        name: "team-member",
        choices: ["engineer", "intern", "finish building my team"]
    },
]

//Function to build team
function buildTeam() {
    inquirer
        .prompt(managerQuestions)
        inquirer
            .prompt(menu)
            if (response === "engineer") {
                inquirer
                    .prompt(engineerQuestions)
            } else {
                if (response === "intern") {
                    inquirer
                    .prompt(internQuestions)
                } else {
                    init()
                }
            }
}


// // Function to write HTML file
// function writeToFile(fileName, data) {
//     return fs.writeFileSync(path.join(process.cwd(), fileName), data)
// }

// // Function to initialize app
// function init() {
//     inquirer
//         .prompt(managerQuestions).then((response) => {
//             writeToFile("index.html", generateHTML(response));
//         });
// }

// // Function call to initialize app
// init();
buildTeam();