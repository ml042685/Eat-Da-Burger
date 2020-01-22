// Import the ORM
var orm = require("../config/orm.js");

// create burger 
var taco = {
	
	selectAll: function(cb) {
		orm.selectAll('tacos', function(res) {
			cb(res);
		});
	},
	


	insertOne: function(cols, vals, cb) {
		orm.insertOne('tacos', cols, vals, function(res) {
			cb(res);
		});
	},
	


	updateOne: function(objColVals, condition, cb) {
		orm.updateOne('tacos', objColVals, condition, function(res) {
			cb(res);
		});
	}
};

// Export 
module.exports = taco;