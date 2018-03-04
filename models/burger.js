// requiring modules
var orm = require('./config/orm');

var burger = {
    
  // ORM for selecting all data from Burger table
  selectAll: function(cbf) {
    orm.all("burger", function(res) {
      cbf(res);
    });
  },
  
  // ORM for inserting a new Burger into table
  insertOne: function(cols, vals, cbf) {
    orm.create("burger", cols, vals, function(res) {
      cbf(res);
    });
  },

  // ORM for updating Burger table
  updateOne: function(objColVals, condition, cbf) {
    orm.update("burger", objColVals, condition, function(res) {
      cbf(res);
    });
  }
};

module.exports = orm;