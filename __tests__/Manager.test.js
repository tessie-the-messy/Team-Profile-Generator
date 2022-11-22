const { Manager } = require("../lib");

const name = "Test Manager",
  id = 333,
  email = "manager@testemail.com",
  officeNumber = 777;

const e = new Manager(name, id, email, officeNumber);

test("Testing getOffice method", () =>
  expect(e.getOfficeNumber()).toBe(officeNumber));
test("Testing getRole method", () => expect(e.getRole()).toBe("Manager"));