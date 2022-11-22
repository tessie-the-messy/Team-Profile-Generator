// Included packages needed for app
const inquirer = require("inquirer")
const generateHTML = require("???")
const fs = require("fs")

// Array of questions for user input
    // Team member name, Team member type(Manager,Enginer,Intern), ID#, e-mail, github
    const questions =[
    { 
        type: "input",
        message: "member name?",
        name: "name",
    
    },
    { 
        type: "list",
        message: "type?",
        choices:["Manager", "Engineer", "Intern"],
        name: "employee",
    
    },
    { 
        type: "input",
        message: "ID#",
        name: "id",
    
    }
    { 
        type: "input",
        message: "e-mail?",
        name: "email"
    
    }
    { 
        type: "input",
        message: "github URL?",
        name: "github"
    
    }
    ]

    // function to 

    // function to initialize app