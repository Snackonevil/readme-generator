// Packages and utilities needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");

// Write README file
function writeToFile(data) {
    fs.writeFile("README.md", data, err =>
        err ? console.log(err) : console.log("Writing README...")
    );
}

// Initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(data => generateMarkdown(data))
        .then(data => writeToFile(data));
}

console.log("Let's create a README...");
init();
