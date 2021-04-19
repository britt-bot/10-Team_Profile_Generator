const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const {generateHTML, finishTeam} = require('./src/generateHTML')
let reference = {html:""};

function promptUser() {
  return inquirer
    .prompt([
        {
          type: "input",
          message: "Please enter Manager Name.",
          name: "name",
        },
        {
          type: "input",
          message: "Please enter Employee Id.",
          name: "id",
        },
        {
          type: "input",
          message: "Please enter Email Address.",
          name: "email",
        },
        {
          type: "input",
          message: "Please enter Office Number.",
          name: "office",
        },
        {
        type: "list",
        message: "What would you like to do next?",
        name: "menu",
        choices: ["Add Engineer", "Add Intern", "Finish Team"],
        },
    ])
    .then((response) => {
      console.log(response);
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber);
      var html = generateHTML(response, manager.getRole(), reference);
      console.log(html);
      if (response.menu === "Add Engineer") {
        enterEngineer(reference);
      } else if (response.menu === "Add Intern") {
        enterIntern(reference);
      } else if (response.menu === "Finish Team") {
        fs.writeFile('./dist/TeamRoster.html', finishTeam(reference), (err) => {
        err ? console.error(err) : console.log("Successfully created Team Roster")
        })
      } else {
        return err;
      }
    })
}

function enterEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Engineer Name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter Employee Id.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter Email Address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter GitHub username.",
        name: "github",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "menu",
        choices: ["Add Engineer", "Add Intern", "Finish Team"],
      },
    ])
    .then((response) => {
      console.log(response);
      const engineer = new Engineer(response.name, response.id, response.email, response.github);
      var html = generateHTML(response, engineer.getRole(), reference);
      console.log(html);
      if (response.menu === "Add Engineer") {
        enterEngineer(reference);
      } else if (response.menu === "Add Intern") {
        enterIntern(reference);
      } else if (response.menu === "Finish Team") {
        console.log(response);
        fs.writeFile('./dist/TeamRoster.html', finishTeam(reference), (err) => {
        err ? console.error(err) : console.log("Successfully created Team Roster")
        })
      } else {
        return err;
      }
    });
}

function enterIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Intern Name.",
        name: "name",
      },
      {
        type: "input",
        message: "Please enter Employee Id.",
        name: "id",
      },
      {
        type: "input",
        message: "Please enter Email Address.",
        name: "email",
      },
      {
        type: "input",
        message: "Please enter attending School.",
        name: "school",
      },
      {
        type: "list",
        message: "What would you like to do next?",
        name: "menu",
        choices: ["Add Engineer", "Add Intern", "Finish Team"],
      },
    ])
    .then((response) => {
      console.log(response);
      const intern = new Intern(response.name, response.id, response.email, response.school)
      var html = generateHTML(response, intern.getRole(), reference);
      console.log(html);
      if (response.menu === "Add Engineer") {
        enterEngineer(reference);
      } else if (response.menu === "Add Intern") {
        enterIntern(reference);
      } else if (response.menu === "Finish Team") {
        console.log(response);
        fs.writeFile('./dist/TeamRoster.html', finishTeam(reference), (err) => {
        err ? console.error(err) : console.log("Successfully created Team Roster")
        })
      } else {
        return err;
      }
    });
}


promptUser();

