// Included packages needed for app
const inquirer = require("inquirer");
const fs = require("fs");
const { Manager, Engineer, Intern } = require("./lib");

const team = [];

// Array of questions for user input
// Team member name, Team member type(Manager,Enginer,Intern), ID#, e-mail, github
const managerQuestions = [
  {
    type: "input",
    message: "name?",
    name: "name",
  },
  {
    type: "input",
    message: "ID#",
    name: "id",
  },
  {
    type: "input",
    message: "e-mail?",
    name: "email",
  },
  {
    type: "input",
    message: "office#?",
    name: "office",
  },
];

const engiQuestions = [
    {
        type: "input",
        message: "name?",
        name: "name",
      },
      {
        type: "input",
        message: "ID#",
        name: "id",
      },
      {
        type: "input",
        message: "e-mail?",
        name: "email",
      },
  {
    type: "input",
    message: "github URL?",
    name: "github",
  },
];

const intQuestions = [
    {
        type: "input",
        message: "name?",
        name: "name",
      },
      {
        type: "input",
        message: "ID#",
        name: "id",
      },
      {
        type: "input",
        message: "e-mail?",
        name: "email",
      },
      {
        type: "input",
        message: "school?",
        name: "school"
      }
]

function addMore () {
    return inquirer.prompt([
        {
            type: "list",
            message: "type?",
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
          engineer.special = engiAnswers.github
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
          intern.special = intAnswers.school
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
         fs.appendFileSync("team.html", `
         ${team[i].name}
         ${team[i].id}
         ${team[i].email}
         ${team[i].getRole()}
         ${team[i].special}
         `)
            
        }
        fs.appendFileSync("team.html", `
        </body>
    </html>
        `)
      }
})
}

inquirer.prompt(managerQuestions).then((answers) => {
  let manager = new Manager(
    answers.name,
    answers.id,
    answers.email,
    answers.office
  );
  manager.special = answers.office
  team.push(manager);
  addMore()
});

// function to add information to HTML file

// function writeFile(fileName, data) {
//     fs.writeFile(fileName, data, (err) => {
//       if (err) {
//         console.log(err);
//       } else {
//         console.log("Employee added to system!");
//       }
//     });
//   }

// function to initialize app

// function init() {
//     inquirer.prompt(questions).then((response) => {
//       const data = generateHTML(response);
//       writeFile("./index.html", data);
//     });
//   }

// init();
