// Generate Markdown for README.md
const renderLicense = require("./licenses");

function generateMarkdown(data) {
    let license = renderLicense(data.license);
    const {
        title,
        year,
        badge,
        author,
        email,
        github,
        description,
        install,
        usage,
        contribute,
        test,
    } = data;
    return `# ${title}
![badge](${badge})
by ${author}
Email: ${email}
GitHub: ${github}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Test](#test)
- [License](#license)

## Installation
${install}

## Usage
${usage}

## Contribute
${contribute}

## Tests
${test}

## License (${license.name})
Copyright ${year} ${author}
${license.notice}

`;
}

module.exports = generateMarkdown;
