// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {   type: 'input',
name: 'readmeTitle',
message: 'Please input the title of your README:',
    },
    {   type: 'input',
name: 'installation',
message: 'Please input the Installation Instructions of your README:',
    },
    {   type: 'input',
name: 'usage',
message: 'Please input your usage information:',
    },
    {   type: 'input',
name: 'contribution',
message: 'Please input your contribution guidelines:',
    },
    {   type: 'input',
name: 'tests',
message: 'Please input your tests:',
    },  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
