//this is the root of our node application.  It creates a new express app, configures the public directory to be the static folder that express serves up, and it calls app.listen to start up the server

//we want to configure the server to serve up the public directory.  we are going to use a built-in node module that makes it easy to convert paths, since server.js is far away from index.html.  It also matters because of cross-compatibility with different OSes.  The module is called path

//Behind the scenes Express is actually using a built in node module called HTTP to create the server.  We need to use HTTP, configure Express to work with HTTP and only then can we add socket.io support

//when we integrated socket.io with our server we got access to a route that accepts incoming connections (so we can use socket.io) and we got access to a JS library that makes it easy to work with socket.io on the client (localhost:3000/socket.io/socket.io.js)

const path = require('path');
const http = require('http');
const express = require('express');
//Express makes it easy to set up an HTTP server
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
//takes two arguments: directory name (here it is server), the relative path (up one to node-chat-app) and folder you go into (here it is public)

const port = process.env.PORT || 3000;
//for heroku
var app = express();
//Above: Express is used to set up an http server.  
//Above: you do not use express by passing in arguments, instead you use it by calling methods on app

//below: create server using HTTP library
var server = http.createServer(app);
//Express and HTTP are so integrated you can just use app as the argument.  Now we're using the HTTP server as opposed to the express server. So below it is now server.listen instead of app.listen

var io = socketIO(server);
//we get back our web sockets server.  On there we can emit or listen to events.  this is how we faciliate communication between client and server


app.use(express.static(publicPath));
//this configures our express static middleware that serves up the public folder

io.on('connection', (socket) => {
	console.log('new user connected');
//this lets you register an event listener.  This lets you listen for a connection to the server and when that connection comes in it deploys the callback fcn.  The socket argument represents the individual socket as opposed to all the users connected to the server.

	socket.on('disconnect', () => {
		console.log('user was disconnected');
	});
});



server.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});