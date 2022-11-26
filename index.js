// Included packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const { Manager, Engineer, Intern } = require("./lib");

//empty array to push each member to
const team = [];

// Array of questions for user input
// Team member name, Team member type(Manager,Enginer,Intern), ID#, e-mail, github
const managerQuestions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your ID?",
    name: "id",
  },
  {
    type: "input",
    message: "What is your e-mail address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your office number?",
    name: "office",
  },
];

const engiQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's e-mail?",
        name: "email",
      },
  {
    type: "input",
    message: "What is the employee's github URL?",
    name: "github",
  },
];

const intQuestions = [
    {
        type: "input",
        message: "What is the employee's name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is the employee's ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is the employee's e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "Where did this employee go to school?",
        name: "school"
      }
]

inquirer.prompt(managerQuestions).then((answers) => {
  let manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.office
  );
  manager.special = "Office: "+ answers.office
  team.push(manager);
  addMore()
});

function addMore () {
    return inquirer.prompt([
        {
            type: "list",
            message: "Which type of employee would you like to add next? If you have completed your team, choose 'Done' .",
            choices: ["Engineer", "Intern", "Done"],
            name: "employee",
        }
    ])
.then (answers => {
    if (answers.employee === "Engineer") {
        inquirer.prompt(engiQuestions).then((engiAnswers) => {
          let engineer = new Engineer(
            engiAnswers.name,
            engiAnswers.id,
            engiAnswers.email,
            engiAnswers.github
          );
          engineer.special = "Github: " + engiAnswers.github
          team.push(engineer);
          addMore()
        });
      } else if (answers.employee === "Intern") {
        inquirer.prompt(intQuestions).then((intAnswers) => {
          let intern = new Intern(
            intAnswers.name,
            intAnswers.id,
            intAnswers.email,
            intAnswers.school
          );
          intern.special = "University: " + intAnswers.school
          team.push(intern);
          addMore()
        });
      } else {
        fs.writeFileSync(
          "team.html",
          `
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="UTF-8" />
              <meta http-equiv="X-UA-Compatible" content="IE=edge" />
              <meta name="viewport" content="width=device-width, initial-scale=1.0" />
              <link
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
                rel="stylesheet"
                integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
                crossorigin="anonymous"
              />
              <link rel = "stylesheet" href="./assets/style.css" />
              <link href="https://fonts.googleapis.com/css2?family=Short+Stack&display=swap" rel="stylesheet">
              <title>♡ My Team ♡</title>
            </head>
            <body>
            <header>
              <h1 class="text-center">♡ My Team ♡</h1>
            </header>
            <main class = "container">  
            <div class="row">`
        );
        for (let i = 0; i < team.length; i++) {
            if (i === 3){
                fs.appendFileSync("team.html", `
                </div>
                <div class = "row">
                `)
            }
            fs.appendFileSync("team.html", `
            <div class="col">
            <div class="card" style="width: 18rem">
              <div class="card-body">
                <h5 class="card-title">♡ ${team[i].name} ♡</h5>
                <h6 class="card-text">${team[i].getRole()}</h6>
              </div>
              <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${team[i].id}</li>
                <li class="list-group-item">
                  Email: <a href="mailto:${team[i].email}">${team[i].email}</a>
                </li>
                <li class="list-group-item">${team[i].special}</li>
              </ul>
            </div>
          </div>
            `)
            
        }
        fs.appendFileSync("team.html", `
        </div>
        </main>
        </body>
      </html>      
        `)
      }
})
};
