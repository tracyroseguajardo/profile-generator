//Packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown")
const path = require("path")

const validation = (input) => {
    if (input !== "") {
        return true;
    }
    return "Please enter a response"
}

//Profile Questions intern’s name, ID, email, and school, 
const managerQuestions = [
    {
        type: "input",
        message: "What is the team manager's name?",
        name: "name",
        validate: validation   
    },
    {
        type: "input",
        message: "What is the manager's employee ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is the manager's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "office",
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

const engineerQuestions = [
    {
        type: "input",
        message: "What is the engineer's name?",
        name: "name",
        validate: validation   
    },
    {
        type: "input",
        message: "What is the engineer's employee ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is the engineer's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "What is the engineer's Github username?",
        name: "username",
    },
]

const internQuestions = [
    {
        type: "input",
        message: "What is the intern's name?",
        name: "name",
        validate: validation, 
    },
    {
        type: "input",
        message: "What is the intern's employee ID?",
        name: "ID",
    },
    {
        type: "input",
        message: "What is the intern's email address?",
        name: "email",
    },
    {
        type: "input",
        message: "Where does the intern go to school?",
        name: "username",
    },
]
