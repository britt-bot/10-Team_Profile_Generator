const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');

function generateHTML(response, role, reference) {
    console.log("Adding employee selected now...");
    if(role == "Manager") {
        reference.html = `<div class="col col-sm-3">
                 <div class="card">
                    <div class="card-body top">                
                        <h2 class="card-title">${response.name}</h2>
                        <h4 class="card-subtitle">${role}</h4>
                            <p class="card-text"> Employee Id: ${response.id}
                            <br>Office Number: ${response.office}</p>
                    </div>
                    <div class="card-body bottom">
                        <h4 class="card-title"><span class="badge badge-secondary">Contact Info</span></h4>
                            <ul class="list-group">
                                <li class="list-group-item">Email: ${response.email}</li>
                            </ul>
                    </div>
                </div>
            </div>`
    } else if(role == "Engineer") {
        reference.html = `${reference.html} 
            <div class="col col-sm-3">
                <div class="card">
                    <div class="card-body top"> 
                        <h2 class="card-title">${response.name}</h2>
                        <h4 class="card-subtitle">${role}</h4>
                            <p class="card-text"> Employee Id: ${response.id}
                            <br><br></p>
                    </div>
                    <div class="card-body bottom">
                        <h4 class="card-title"><span class="badge badge-secondary">Contact Info</span></h4>
                            <ul class="list-group">
                                <li class="list-group-item">Email: ${response.email}</li>
                                <li class="list-group-item">GitHub: ${response.github}</li>
                            </ul>
                    </div>
                </div>
            </div>`
    } else if(role == "Intern") {
        reference.html = `${reference.html} 
            <div class="col col-sm-3">
                <div class="card">
                    <div class="card-body top"> 
                        <h2 class="card-title">${response.name}</h2>
                        <h4 class="card-subtitle">${role}</h4>
                            <p class="card-text"> Employee Id: ${response.id}
                            <br><br></p>
                    </div>
                    <div class="card-body bottom">
                        <h4 class="card-title"><span class="badge badge-secondary">Contact Info</span></h4>
                            <ul class="list-group">
                                <li class="list-group-item">Email: ${response.email}</li>
                                <li class="list-group-item">School: ${response.school}</li>
                            </ul>
                    </div>
                </div>
            </div>`
    }
    return reference.html;
};

function finishTeam(reference) {
        // WHEN I click on an email address in the HTML
        // THEN my default email program opens and populates the TO field of the email with the address
        // WHEN I click on the GitHub username
        // THEN that GitHub profile opens in a new tab
        console.log(reference);
        return `<!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <meta http-equiv="X-UA-Compatible" content="ie=edge">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
          <link rel="stylesheet" href="style.css">
          <title>Team Roster</title>
        </head>
        <body>
            <div class="container">
                <div class="jumbotron">
                    <div class="row justify-content-center">
                    <h1>TEAM ROSTER</h1>
                    </div>
                </div>
            </div>

            <div class="container-fluid">
                <div class="row justify-content-center">
                    ${reference.html}
                </div>
            </div>
        </body>
        </html>`;
}


module.exports = generateHTML;
module.exports = finishTeam;