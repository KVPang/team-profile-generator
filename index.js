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
    const newMgr = new Manager(response.name, response.id, response.email, response.office)
    teamArr.push(newMgr)
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

// add an intern, engineer or finish building the team: 
.then(response) => {
    console.log (response)
}



// intern's name, ID number, email, school
function intern () {
    inquirer.prompt([
        {
            type: "input",
            message: "Please provide the intern's name",
            name: "name"
        },
        {
            type: "input",
            message: "What is the intern's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "Please provide the intern's email address",
            name: "email"
        },
        {
            type: "input",
            message: "Please provide the intern's school",
            name: "school"
        },
    ])}


// engineer's name, ID, GitHub and email 
function engineer() {
    inquirer.prompt([
        {
            type: "input",
            message: "Please provide the engineer's name",
            name: "name"
        },
        {
            type: "input",
            message: "What is the engineer's ID number?",
            name: "id"
        },
        {
            type: "input",
            message: "Please provide the engineer's GitHub username",
            name: "github"
        },
        {
            type: "input",
            message: "Please provide the engineer's email address",
            name: "email"
        },

    ])
}.then(response => {
