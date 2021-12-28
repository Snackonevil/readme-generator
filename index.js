// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
  //   {
  //     type: 'input',
  //     message: 'Title:',
  //     name: 'title',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Description:',
  //     name: 'description',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Author:',
  //     name: 'author',
  //   },
  //   {
  //     type: 'input',
  //     message: 'GitHub profile:',
  //     name: 'github',
  //   },
  //   {
  //     type: 'input',
  //     message: 'email:',
  //     name: 'email',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Installation instructions:',
  //     name: 'install',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Usage:',
  //     name: 'usage',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Contribution:',
  //     name: 'contribute',
  //   },
  //   {
  //     type: 'input',
  //     message: 'Test:',
  //     name: 'test',
  //   },
  {
    type: 'list',
    message: 'License:',
    choices: [
      'MIT',
      new inquirer.Separator(),
      'GNU GPLv3',
      new inquirer.Separator(),
      'ISC',
    ],
    name: 'license',
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  fs.writeFile('README.md', data, err =>
    err ? console.log(err) : console.log('Writing README...')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then(data => generateMarkdown(data))
    .then(data => writeToFile(data));
}

// Function call to initialize app
console.log("Let's create a README");
init();
