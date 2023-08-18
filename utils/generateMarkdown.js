// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === undefined || license === null){
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {readmeTitle, installation, usage, contribution, license} = data
  return `# ${readmeTitle}
  ## Installation
  ${installation}
  ## Usage 
  ${usage}
  ## Contribution
  ${contribution}
  ## License

`;
}

module.exports = generateMarkdown;
