let renderLicense = require("./licenses");

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    let license = renderLicense(data.license);
    return `# ${data.title}
![badge](${license.badge})

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribute](#contribute)
- [Test](#test)
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
${license.notice}

`;
}

module.exports = generateMarkdown;
