const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("connecting...");
//Connect to server
connect();
//Handle user input
setupInput();