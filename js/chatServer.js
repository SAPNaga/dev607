/*eslint no-console: 0, no-unused-vars: 0*/
"use strict";
var express = require("express");
var app = express(); 
var WebSocketServer = require("ws").Server;

module.exports = function(server){
	app.use(function(req, res){
    	res.send({ msg: "hello" });
	});
	var wss = new WebSocketServer({ 
		server: server, 
		path: "/node/chatServer"
	});

	wss.broadcast = function (data) {
    	for (var i in this.clients)
        	this.clients[i].send(data);
    	console.log("sent: %s", data);
	};

	wss.on("connection", function (ws) {
    	ws.on("message", function (message) {
        	console.log("received: %s", message);
        	wss.broadcast(message);
		});
    	ws.send(JSON.stringify({
        	user: "XS",
        	text: "Hello from Node.js XS Server"
    	}));
	});
	
	return app;
};
