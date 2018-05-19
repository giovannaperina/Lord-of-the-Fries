var express = require("express");
var fries = require("../models/fries.js");

var router = express.Router();


router.get('/', function(req, res) {
    fries.all(function(data) {
      var hbsObject = {
        fries: data
      };
      res.render('index', hbsObject);
    });
  });
  
  router.post('/fries', function(req, res) {
    fries.create(['fries_name','calories'], [req.body.fries_name, req.body.calories], function(data) {
      res.redirect('/');
    });
  });
  
  router.put('/fries/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;
    var eat = req.body.eat;
    
    fries.update({
        eat: eat
    }, condition, function(data) {
      res.redirect(303, '/');
    });
  });


// Export routes for server.js to use.
module.exports = router;