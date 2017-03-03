var expect = require('expect');
//load in the expect module

var {generateMessage} = require('./message');
//load in the module we are testing.  Using ES6 destructuring we pull off generateMessage, then we require it.

//then we write the describe fcn, which first says what we are testing, then has a callback fcn that includes all of the test cases in the code block
describe('generateMessage', () => {
	it('should generate correct message object', () => {
		var from = 'Jen';
		var text = 'Some message';
		var message = generateMessage(from, text);
		//The response (res) is the message that comes back from the generateMessage fcn; here we are storing it in the var message.  Below we are making assertions about what is in that message object/variable

		expect(message.createdAt).toBeA('number');
		expect(message).toInclude({
			from, //ES6
			text
		});
	});
});