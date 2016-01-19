var express = require( 'express' );
var swig = require('swig');
var routes = require('./routes/');
var app = express(); 

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(express.static('public'));

app.use('/', routes);


app.listen(3000, function(){
	console.log("server listening");
});

