const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// inquirer.prompt([
//     {
//       type: "input",
//       name: "name",
//       message: "What is your name?"
//     },
//     {
//       type: "input",
//       name: "id",
//       message: "What is your id?"
//     },
//     {
//       type: "input",
//       name: "email",
//       message: "What is your email?"
//     },
//     {
//       type: "checkbox",
//       message: "Please leave a contact to reach.",
//       name: "contact",
//       choices: [
//         "Office number:", 
//         "GitHub:", 
//         "School:", 
//       ]
//     },
// ])
// .then(function(response) {
//     if ( ) {
//       console.log("");
//     }
//     else {
//       console.log("Y");
//     }
// });
class Workers {
  constructor(name, strength, hitPoints) {
    if (!name) {
      throw new Error("You are missing the name.");
    }
    if (!id) {
      throw new Error("You are missing the strength.");
    }
    if (!email) {
      throw new Error("You are missing the hitPoints.");
    }
    if (!contact) {
        throw new Error("You are missing the hitPoints.");
    }
    this.name = name;
    this.id = id;
    this.email = email;
    this.contact = contact;
} 
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
