const inquirer = require("inquirer");
const fs = require("fs");
const finishTeam = require("./src/generateHTML")
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
      const manager = new Manager(response.name, response.id, response.email, response.officeNumber)
      if (response.menu === "Add Engineer") {
        enterEngineer();
      } else if (response.menu === "Add Intern") {
        enterIntern();
      } else if (response.menu === "Finish Team") {
        const generateHTML = finishTeam(manager);
        console.log(response);
        console.log(manager.getRole());
        console.log(generateHTML(response));
        fs.writeFile('./dist/TeamRoster.html', generateHTML(manager, manager.getRole()), (err) => {
        err ? console.error(err) : console.log("Successfully created Team Roster")
        })
      } else {
        return err;
      }
    });
}

function enterEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        message: "Please enter Engineer Name.",
        name: "Name",
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
      const engineer = new Engineer(response.name, response.id, response.email, response.gitHub)
      if (response.menu === "Add Engineer") {
        enterEngineer();
      } else if (response.menu === "Add Intern") {
        enterIntern();
      } else if (response.menu === "Finish Team") {
        const generateHTML = finishTeam(engineer);
        console.log(response);
        console.log(engineer.getRole());
        console.log(generateHTML(response));
        fs.writeFile('./dist/TeamRoster.html', generateHTML(engineer, engineer.getRole()), (err) => {
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
      const intern = new Intern(response.name, response.id, response.mail, response.school)
      if (response.menu === "Add Engineer") {
        enterEngineer();
      } else if (response.menu === "Add Intern") {
        enterIntern();
      } else if (response.menu === "Finish Team") {
        const generateHTML = finishTeam(intern);
        console.log(response);
        console.log(intern.getRole());
        console.log(generateHTML(response));
        fs.writeFile('./dist/TeamRoster.html', generateHTML(intern, intern.getRole()), (err) => {
        err ? console.error(err) : console.log("Successfully created Team Roster")
        })
      } else {
        return err;
      }
    });
}


promptUser();

