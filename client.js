const net = require('net');

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: '50541',
  });

  //Interpret incoming data
  conn.setEncoding('utf-8');

  //Event handlers
  conn.on("connect", () => {
    console.log("Connection to the server has been established");
    conn.write("Name: CEP");
  });

  conn.on("data", (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect,
};