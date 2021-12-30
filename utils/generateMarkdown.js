// Generate Markdown for README.md
const renderLicense = require("./licenses");

function generateMarkdown(data) {
    let license = renderLicense(data.license);
    return `# ${data.title}
![badge](${license.badge})
by ${data.author}
Email: ${data.email}
GitHub: ${data.github}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Test](#tests)
- [License](#license)

## Installation
${data.install}

## Usage
${data.usage}

## Contribute
${data.contribute}

## Tests
${data.test}

## License 
(${license.name})
Copyright ${data.year} ${data.author}
${license.notice}

`;
}

module.exports = generateMarkdown;
