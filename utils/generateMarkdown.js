// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === undefined || license === null) {
    return "";
  }
  if (license === "MIT")
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  if (license === "Apache")
    return `[![License: Apache](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  if (license === "GPL v3")
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  if (license === "GPL v2")
    return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  if (license === "BSD 3-Clause")
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
  if (license === "BSD 2-Clause")
    return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === undefined || license === null) {
    return "";
  }
  return `(#license)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined || license === null) {
    return "";
  }
  return `License`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    readmeTitle,
    description,
    installation,
    usage,
    credits,
    license,
    tests,
    github,
    email,
  } = data;
  return `# ${readmeTitle}
  ${renderLicenseBadge(license)}
  ## Description
  ${description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [${renderLicenseSection(license)}]${renderLicenseLink(license)}
  - [Credits](#credits)
  - [Tests](#tests)
  - [Questions](#questions)

  ## Installation
  ${installation}
  ## Usage 
  ${usage}
  ## Credits
  ${credits}
  ## ${renderLicenseSection(license)}
  This application is covered under the ${license} license, for more information please click the badge at the top of this README, which has a link to everything about the license.
  ## Tests
  ${tests}
  ## Questions
  My [Github Profile](https://github.com/${github})
  Additionally you can email me at <${email}> with any questions!
`;
}

module.exports = generateMarkdown;
