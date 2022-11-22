const { Intern } = require("../lib");

const name = "Test Intern",
  id = 222,
  email = "intern@testemail.com",
  school = "University of Interns";

const e = new Intern(name, id, email, school);

test("Testing getSchool method", () => expect(e.getSchool()).toBe(school));
test("Testing getRole method", () => expect(e.getRole()).toBe("Intern"));