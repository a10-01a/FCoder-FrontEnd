const express = require('express'),
	bodyParser = require('body-parser');

const server = express();

server.set("views", __dirname + "/views");

server.use(express.static(__dirname + "/views"));
server.use(bodyParser.urlencoded({ extended : true }));

server.get("/", (_, res) => {
	res.render("home.html");
});

server.listen (3000, function(){
	console.log('Running server');
});
