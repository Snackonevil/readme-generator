// Prompt Questions
const inquirer = require("inquirer");

const questions = [
    {
        type: "input",
        message: "Title:",
        name: "title",
    },
    {
        type: "input",
        message: "Description:",
        name: "description",
    },
    {
        type: "input",
        message: "Author:",
        name: "author",
    },
    {
        type: "input",
        message: "GitHub profile:",
        name: "github",
    },
    {
        type: "input",
        message: "email:",
        name: "email",
    },
    {
        type: "input",
        message: "Installation instructions:",
        name: "install",
    },
    {
        type: "input",
        message: "Usage:",
        name: "usage",
    },
    {
        type: "input",
        message: "Contribution:",
        name: "contribute",
    },
    {
        type: "input",
        message: "Test:",
        name: "test",
    },
    {
        type: "input",
        message: "Year Created:",
        name: "year",
    },
    {
        type: "list",
        message: "Choose a License:",
        choices: [
            "MIT",
            new inquirer.Separator(),
            "GNU GPLv3",
            new inquirer.Separator(),
            "ISC",
        ],
        name: "license",
    },
];

module.exports = questions;
