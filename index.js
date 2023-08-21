// Packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// Array of questions for user input to be used with inquirer
const questions = [
  {
    type: "input",
    name: "readmeTitle",
    message: "Please input the title of your README:",
  },
  {
    type: "input",
    name: "description",
    message: "Please input the Description of your README:",
  },
  {
    type: "input",
    name: "installation",
    message: "Please input the Installation Instructions of your README:",
  },
  {
    type: "input",
    name: "usage",
    message: "Please input your usage information:",
  },
  {
    type: "input",
    name: "credits",
    message: "Please input any contributors or other relevant information:",
  },
  {
    type: "input",
    name: "tests",
    message: "Please input your test instructions:",
  },
  {
    type: "list",
    name: "license",
    message:
      "Please choose your license, make sure it matches the license on your github repository:",
    choices: [
      "MIT",
      "Apache",
      "GPL v3",
      "GPL v2",
      "BSD 3-Clause",
      "BSD 2-Clause",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "Please input your github username:",
  },
  { type: "input", name: "email", message: "Please input your email address:" },
];

// function to write README file
function writeToFile(fileName, data) {
    fileName = `${fileName.toLowerCase().split(' ').join('')}.md`;
  fs.writeFile(`${fileName}`, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const { readmeTitle } = data;
    writeToFile(readmeTitle, data);
  });
}

// Function call to initialize app
init();
