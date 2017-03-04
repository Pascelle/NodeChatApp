const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
	it('should reject non-string values', () => {
		var loginName = 123;
		var roomName = true;
		//the above are our sample values (i.e. non-string value)
	
		expect(isRealString(loginName)).toBe(false);
		expect(isRealString(roomName)).toBe(false);
		//this is what we expect
		});

	it('should reject strings with only spaces', () => {
		var res = isRealString('    ');
		expect(res).toBe(false);
		});

	it('should allow strings with non-space characters', () => {
		var res = isRealString('   Pascelle   ');
		expect(res).toBe(true);
		});
});