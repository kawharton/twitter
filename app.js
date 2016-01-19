var express = require( 'express' );
var swig = require('swig');
var app = express(); // creates an instance of an express application

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

var people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


app.use(function (req, res, next) {
    // do your logging here
    res.render( 'index', {title: 'Hall of Fame', people: people} );
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
});



app.listen(3000, function(){
	console.log("server listening");
});

