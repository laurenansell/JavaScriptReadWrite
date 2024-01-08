// Requiring users file 

const fs = require("fs");

// Read in the JSON file
const users = require("./users"); 
  
// Define a new user
let user = {
    name: "Lauren Ansell",
    age: 30,
    language: ["Python", "JavaScript", "R"]
}

// Add the new user
users.push(user);

// Write to file
fs.writeFile("users.json", JSON.stringify(users),err => {
    if (err) throw err; // to check for errors

    console.log("Success")
});