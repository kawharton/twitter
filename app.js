var express = require( 'express' );
var app = express(); // creates an instance of an express application

// app.get("/", function(req, res, next) {
// 	res.send("hey");
// })

app.get("/dogs", function(req, res, next) {
	res.send("This is news.");
})

app.get("/news", function(req, res, next) {
	res.send("This is news.");
})

app.use(function (req, res, next) {
    // do your logging here
    console.log(req.method, req.url, res.status());
    
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    
    next();
})



app.listen(3000, function(){
	console.log("server listening");
})

