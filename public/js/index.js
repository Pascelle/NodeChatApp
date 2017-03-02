//this will contain all the JS we need to make index.html work

//below: this script loads a method that allows us to initiate a connection request 
 	
var socket = io();
//available to us bc we loaded in socket.io.  When we call it we are innitiating the request from the client to the server to open up a web socket and keep that connection open.   What we gets back from io() is important and should be stored in a var.  var socket allows us to listen for data from the server and send data to the server.

socket.on('connect', function () {
	//we don't get a socket argument here bc we already have it above
	console.log('Connected to server');

	//below: what this does is create a client side script that connects to the server and as soon as it connects it emits this createMessage event
	socket.emit('createMessage', {
		to: 'everyone in the chatroom',
		text: 'Hey i am new here'
	});
});

socket.on('disconnect', function () {
	console.log('disconnected from server');
});

// socket.on('newEmail', function (email) {
// 	//the data sent as the second argument to the emit call over in server.js is the argument here, then we can do what we want with it-- like add it to a list of emails
// 	console.log('New email', email);
// });

socket.on('newMessage', function (message) {
	console.log('newMessage', message);
});