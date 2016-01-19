var express = require('express');
var router = express.Router();
// could use one line instead: var router = require('express').Router();
var tweetBank = require('../tweetBank');

module.exports = function(io) {
	router.post('/tweets', function(req, res) {
	  var name = req.body.name;
	  var text = req.body.text;
	  tweetBank.add(name, text);
	  res.redirect("/");
	});

	router.get('/users/:name', function(req, res) {
	  var name = req.params.name;
	  var tweets = tweetBank.find( {name: name} );
	  res.render( 'index', { title: 'Twitter.js - Posts by '+name, tweets: tweets, showForm: true } );
	});

	router.get('/tweets/:id', function(req, res) {
	  var id = req.params.id;
	  var tweets = tweetBank.find( {id: id} );
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets } );
	});

	router.get('/', function (req, res) {
	  var tweets = tweetBank.list();
	  res.render( 'index', { title: 'Twitter.js', tweets: tweets, showForm: true } );
	});
	return router;
};


