// imports parent class
const Employee = require("./Employee");
// extends makes Engineer a child of Employee
class Engineer extends Employee {
  constructor(name, id, email, github) {
    // define whsuper - allows access to properties and methods from Employee (the parent class)
    super(name, id, email); 
    this.github = github;
  }

  getGithub = () => this.github;
  getRole = () => "Engineer";
}

module.exports = Engineer;