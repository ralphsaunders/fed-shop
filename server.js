var express = require("express");
var _ = require("underscore");
var bodyParser = require("body-parser");
var multer = require("multer");
var jade = require("jade");

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.static("public"));
app.set("view engine", "jade");

// View Stuff

app.get("/", function(req, res){
	res.status(200).render("index");
});

// API Stuff

var prefixes = ["bouncy", "itchy", "smelly"],
	suffixes = ["boobs", "fridge", "flamingo"];

app.get("/api", function(req, res) {
	var text = _.sample(prefixes) + " " + _.sample(suffixes);
	// res.json("ash rules");
	res.status(200).send(text);
});

app.get("/api/prefixes", function(req, res) {
	res.status(200).send(prefixes);
});

app.get("/api/suffixes", function(req, res) {
	res.status(200).send(suffixes);
});

app.get("/api/prefixes/:id", function(req, res) {
	var index = parseInt(req.params.id, 10);
	if (index >= prefixes.length) {
		res.status(404).send("Don't be a douche bag");
	}
	res.status(200).send(prefixes[index]);
});

app.post("/api/suffixes", function(req, res) {
	var suffix = req.body.suffix;

	if (suffix) {
		suffixes.push(suffix);
	}

	res.status(200).send(suffixes);
});

var server = app.listen(3000, function() {
	var host = server.address().address,
		port = server.address().port;
	console.log("App listening at http://%s:%s", host, port);
});