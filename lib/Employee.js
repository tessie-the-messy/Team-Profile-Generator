class Employee {
    // constructor allows creation of multiple objects
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    // creating arrow functions
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Employee";
  }
  
  module.exports = Employee;
  