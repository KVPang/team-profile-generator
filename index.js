const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require ("./lib/Manager");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const teamArr = []

//  questions - team manager's name, id, office number and email address 
inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "Please provide the team manager's name",
    },
    {
        type: "input",
        name: "id",
        message: "What is the manager's ID number?",
    },
    {
        type: "input",
        name: "office",
        message: "Please provide the manager's office number",
    },
    {
        type: "input",
        name: "email",
        message: "Please provide the manager's email",
    },
]).then(response => {
    console.log(response)
    (new Manager(response.name, response.id, response.email, response.office, response.email)
    generateTeam();
})

// prompt with a menu of options to add an intern, add an engineer, or finish building a team
function generateTeam() {
    inquirer.prompt([
        {
            type: "checkbox",
            message: "Would you like to add a member to your team?",
            name:"team",
            options: ["Intern", "Engineer", "I'm finished building my team"]
        }
])}
.then(response) => {
    console.log (response)
}


// engineer's name, ID, GitHub and email 

