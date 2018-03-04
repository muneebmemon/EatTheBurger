// exporting required modules
var express = require('express');
var burger = require('../models/burger.js');

var router = express.Router();

// GET route
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsData = {
      burgers: data
    };
    res.render("index", hbsData);
  });
});

// POST route
router.post("/api/burger", function(req, res) {
  burger.insertOne(["burger_name"], [req.body.burger_name], function(result) {
    // Send back the ID of the new burger
    res.json({ id: result.id });
  });
});

// PUT route
router.put("/api/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.updateOne( {devoured: req.body.devoured} , condition , function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.sendStatus(404);
      }
        // else sending OK status response
      res.sendStatus(200);
    });
});

module.exports = router;