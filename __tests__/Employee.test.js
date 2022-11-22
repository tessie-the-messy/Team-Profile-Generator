const { Employee } = require("../lib");

const name = "Test Employee",
  id = 807,
  email = "employee@testemail.com";

const e = new Employee(name, id, email);

test("Creating Object...", () => expect(typeof e).toBe("object"));
test("Testing getName method", () => expect(e.getName()).toBe(name));
test("Testing getId method", () => expect(e.getId()).toBe(id));
test("Testing getEmail method", () => expect(e.getEmail()).toBe(email));
test("Testing getRole method", () => expect(e.getRole()).toBe("Employee"));