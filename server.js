var express = require('express');
var _ = require('underscore');
var bodyParser = require('body-parser');
var app = express();
var multer = require('multer');
var jade = require('jade');

app.use(bodyParser.json);
app.use(bodyParser.urlencoded({extended: true }));
app.use(express.static('public'));
app.set('view engine', 'jade');

//View stuff

app.get('/', function(req, res){
	res.status(200).render('index');
});

//API stuff

var prefixes = ['wallnut','peanut','pestachio'],
    suffixes = ['round','square','rectangle'];

app.get('/api', function(req, res){
	var text = _.sample(prefixes) + ' ' + _.sample(suffixes);
	//res.json('hola');
	res.status(200).send(text);
});

app.get('/api/prefixes', function(req, res){
	res.status(200).send(prefixes);
});

app.get('/api/suffixes', function(req, res){
	res.status(200).send(suffixes);
});

app.get('/api/prefixes/:id', function(req, res){
	var index = parseInt(req.params.id, 10);
	if(index >= prefixes.length){
		res.status(404).send('404');
	} else{
		res.status(200).send(prefixes[index]);
	}
});

app.post('/api/suffixes', function(req, res){
	var suffix = req.body.suffix;

	if(suffix && suffixes.indexOf(suffix) === -1){
		suffixes.push(suffix);
	}

	res.status(200).send(suffixes);
});

var server = app.listen(3000, function(){
	var host = server.address().address,
	    port = server.address().port;
	console.log('App listening at http://%s:%s', host, port);
});
