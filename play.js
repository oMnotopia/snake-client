const { connect } = require('./client');
const { setupInput } = require('./input');

console.log("connecting...");
//Connect to server
let con = connect();
//Handle user input
setupInput(con);