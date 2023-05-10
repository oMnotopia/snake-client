const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("connecting...");
//Connect to server
//Handle user input
setupInput(connect());