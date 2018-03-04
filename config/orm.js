var connection = require('./config/connection');

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

var orm = {
    
  // ORM for selecting
  selectAll: function(tableName, cbf) {
    var queryString = "SELECT * FROM " + tableName;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cbf(result);
    });
  },

  // ORM for insert 
  insertOne: function(tablename, cols, vals, cbf) {
    var queryString = "INSERT INTO " + tableName;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += vals.map(val => "?").toString();
    queryString += ") ";

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cbf(result);
    });
  },

  // ORM for update table
  updateOne: function(tableName, objColVals, condition, cbf ) {
    var queryString = "UPDATE " + tableName;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cbf(result);
    });
  }
};

module.exports = orm;