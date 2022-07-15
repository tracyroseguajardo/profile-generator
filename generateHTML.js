//function to dynamically populate engineer
function populateEngineer(data) {
    for (i = 0; i < data.engineer[i]; i++) {

    }
}

//function to dynamically populate inter

//Function to generate HTML
function generateHTML(data) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profiles</title>
    </head>
    <body>
        <h1>My Team</h1>
        <div id="manager">
            <h2>Manager ${data.managerName}</h2>
            <div id="info">
                <p>Employee ID: ${data.managerID}</p>
                <p>Email: ${data.managerEmail}</p>
                <p>Office number: ${data.managerOffice}</p>
            </div>
        </div>    
        <div id="engineers">
            ${populateEngineer()}
        </div>
        <div id="interns">
            ${populateIntern()}
        </div>
    </body>
    </html>`
}