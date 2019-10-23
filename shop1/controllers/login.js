var express = require('express');
var userModel = require('./../models/user-model');
var router = express.Router();

router.get('/', function(request, response){
	response.render('login/index');
});

router.post('/', function(request, response){
	
	var user = {
		username: request.body.username,
		password: request.body.password
	};

	userModel.validate(user, function(status,type){
	    if (status) {
	        if (type = "admin") {
	            response.cookie('username', request.body.username);
	            response.redirect('/home');
	        }
	        else {
	            response.cookie('username', request.body.username);
	            response.redirect('/emp');
	        }
		}else{
			response.send('invalid username/password');		
		}
	});

});

module.exports = router;


