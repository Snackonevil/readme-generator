// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err =>
        err ? console.log(err) : console.log("Writing README...")
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
