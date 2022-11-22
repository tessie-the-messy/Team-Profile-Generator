// imports parent class
const Employee = require("./Employee");
// Intern is now a child of Employee
class Intern extends Employee {
  constructor(name, id, email, school) {
    // allows access of name,id,email from Employee
    super(name, id, email);
    this.school = school;
  }

  getSchool = () => this.school;
  getRole = () => "Intern";
}

module.exports = Intern;