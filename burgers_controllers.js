// Required depedencies
var express = require('express');
var router = express.Router();
var burger = require('../models/taco.js');

// Create routes

// Index redirect
router.get('/', function(req, res) {
	res.redirect('/index');
});


// selectAll
router.get('/index', function(req, res) {
	burger.selectAll(function(data) {
		var hbsObject = {tacos: data};
		res.render('index', hbsObject);
	});
});



// insertOne
router.post('/tacos/insertOne', function(req, res) {
	burger.insertOne(['taco_name', 'devoured'], [req.body.name, false], function() {
		res.redirect('/index');
	});
});



// updateOne
router.put('/tacos/updateOne/:id', function(req, res) {
	var condition = 'id = ' + req.params.id;
	console.log('condition', condition);

	burger.updateOne({devoured: req.body.devoured}, condition, function() {
		res.redirect('/index');
	});
});


// Export 
module.exports = router;