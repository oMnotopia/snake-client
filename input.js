//Stores the active TCP connection object
let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  //Movement commands
  if (key === 'w') {
    connection.write("Move: up");
  }
  if (key === 'a') {
    connection.write("Move: left");
  }
  if (key === 's') {
    connection.write("Move: down");
  }
  if (key === 'd') {
    connection.write("Move: right");
  }
  //Chat commands
  if (key === 'z') {
    connection.write("Say: Hisss");
  }
  if (key === 'x') {
    connection.write("Say: Too sssslow");
  }

};

//Setup interface to handle user input from stdin
const setupInput = (conn) => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  connection = conn;

  stdin.on("data", handleUserInput);

  return stdin;
};

module.exports = {
  setupInput,
};