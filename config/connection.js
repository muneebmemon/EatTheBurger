// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  port: 3360,
  host: "localhost",
  user: "root",
  password: "mypassword1927",
  database: "burgers_db"
});

// Making connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected as id... " + connection.threadId);
});

module.exports = connection;