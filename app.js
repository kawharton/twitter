var express = require( 'express' );
var swig = require('swig');
var routes = require('./routes/');
var bodyParser = require('body-parser');
var socketio = require('socket.io');

var app = express(); 

var server = app.listen(3000);
var io = socketio.listen(server);

app.engine('html', swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');
swig.setDefaults({ cache: false });

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', routes(io));


