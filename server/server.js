//this is the root of our node application.  It creates a new express app, configures the public directory to be the static folder that express serves up, and it calls app.listen to start up the server

//we want to configure the server to serve up the public directory.  we are going to use a built-in node module that makes it easy to convert paths, since server.js is far away from index.html.  It also matters because of cross-compatibility with different OSes.  The module is called path

const path = require('path');

const publicPath = path.join(__dirname, '../public');
//takes two arguments: directory name (here it is server), the relative path (up one to node-chat-app) and folder you go into (here it is public)

console.log(publicPath);

const express = require('express');
const port = process.env.PORT || 3000;
//for heroku
var app = express();
//you do not use express by passing in arguments, instead you use it by calling methods on app

app.use(express.static(publicPath));
//this configures our express static middleware that serves up the public folder

app.listen(port, () => {
	console.log(`Server is up on port ${port}`);
});