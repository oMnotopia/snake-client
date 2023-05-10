//Stores the active TCP connection object
let connection;

const handleUserInput = (key) => {
  if (key === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }

  if (key === 'w') {
    process.stdout.write("Move");
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