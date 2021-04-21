const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const index = require('../index');

function generateHTML(response, role, reference) {
    console.log("Adding employee selected now...");
    console.log(1, reference);
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
                                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>
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
                                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>                                
                                <li class="list-group-item">GitHub: <a href="https://github.com/${response.github}" target="_blank">${response.github}</a></li>
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
                                <li class="list-group-item">Email: <a href="mailto:${response.email}">${response.email}</a></li>                                
                                <li class="list-group-item">School: ${response.school}</li>
                            </ul>
                    </div>
                </div>
            </div>`
    }
    console.log(2, reference);
    return reference.html;
};

function finishTeam(reference) {
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


module.exports = {generateHTML, finishTeam};