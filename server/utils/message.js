//the purpose is to create a method that automatically creates the data object for us.  It replaces this:
	// {
	// 			from: 'Admin',
	// 			text: 'Welcome to the chat app',
	// 			createdAt: new Date().getTime()
	// 		}

var generateMessage = (from, text) => {
	return {
		from,
		text,
		createdAt: new Date().getTime()
	};
};

module.exports = {generateMessage};

//we created this method, then we tested it in message.test.js.  Once we confirmed that it worked we integrated it into server.js