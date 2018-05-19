// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var fries = {
    all: function(cb) {
      orm.selectAll("fries", function(res) {
        cb(res);
      });
    },
    create: function(cols, vals, cb) {
      orm.insertOne("fries", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.updateOne("fries", objColVals, condition, function(res) {
        cb(res);
      });
    }
  };

module.exports = fries;