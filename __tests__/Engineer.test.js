const { Engineer } = require("../lib");

const name = "Test Engineer",
  id = 111,
  email = "engineer@testemail.com",
  github = "engineergithubprofile";

const e = new Engineer(name, id, email, github);

test("Testing getGithub method", () => expect(e.getGithub()).toBe(github));
test("Testing getRole method", () => expect(e.getRole()).toBe("Engineer"));