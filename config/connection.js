// Set up MySQL connection.
var mysql = require('mysql');

var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
   port: 3360,
   host: "localhost",
   user: "root",
   password: "",
   database: "burgers_db"
  });
}
// Making connection
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connected to MySQL with id... " + connection.threadId);
});

module.exports = connection;