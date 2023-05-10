const net = require('net');
const { IP, PORT} = require('./constants');

//establishes a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
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