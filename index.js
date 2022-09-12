// TODO: Include packages needed for this application
// Packages
var inquirer = require("inquirer");
var fs = require("fs"); // TODO: learn how to create a file with fs


   
function promptUser()
    return inquirer.prompt

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "Title",
        message: "What is the title of the project?",
    }, {
        type: "input",
        message: "What is the project about? Give a detailed description of your project.",
        name: "Description"
    }, {
        type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
    }, {
        type: "input",
            name: "usage",
            message: "What is this project usage for?"
    }, 
    {
        type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open",
    ]

},
{
    type: "input",
    name: "contributing",
    message: "Who are the contributors of this projects?"
},
{
    type: "input",
    name: "tests",
    message: "Is there a test included?"
},
{
    type: "input",
    name: "questions",
    message: "What do I do if I have an issue? "
},
{
    type: "input",
    name: "username",
    message: "Please enter your GitHub username: "
},
{
    type: "input",
    name: "email",
    message: "Please enter your email: "
}
];





// TODO: Create a function to write README file

function generateMarkdown(response) {
    return `
  
  # ${response.title}
  
  # Table of Content
  -[description](#description)
  -[installation](#installation)
  -[usage](#usage)
  -[licenses](#licenses)
  -[contribution](#contribution)
  -[test](#test)
  -[username](#username)
  -[profile](#profile)
  
  ${response.username}
  ##username:
  
      ${response.description}
  ##description:
  
      ${response.installation}
  ##installation:
  
      ${response.usage}
  ##usage:
  
      ${response.licenses}
  ##licenses:
  
      ${response.contribution}
  ##contribution:
  
      ${response.test}
  ##test:
  
      ${response.email}
  ##email:
  
      ${response.profile}
  ##profile:
  `;
  }
  
  module.exports = generateMarkdown;
    



// TODO: Create a function to initialize app
function init() {
    questions()
    .then(answers => {
        return generatePage(answers);
    })
}


// Function call to initialize app
readmeGen();

