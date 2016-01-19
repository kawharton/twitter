var express = require( 'express' );
var app = express(); // creates an instance of an express application

app.get("/", function(req, res, next) {
	res.send("hey");
})





app.listen(3000, function(){
	console.log("server listening");
})

