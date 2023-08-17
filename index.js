// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require('fs')
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
    {   type: 'list',
    name: 'license',
    message: 'Please choose your license, make sure it matches the license on your github repository:',
    choices: ['MIT', 'Apache']
        },   
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fileName = `${fileName.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(`${fileName}`, generateMarkdown(data, (err) =>
    err ? console.log(err) : console.log('Success!'))
    
)}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const {readmeTitle} = data
            console.log(`title is ${readmeTitle}`);
            writeToFile(readmeTitle, generateMarkdown(data));

        })
}

// Function call to initialize app
init();
