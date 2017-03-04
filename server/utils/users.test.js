const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
	var users;
	//we put users out here bc we want the var to be accessible to not only beforeeach but also the test cases

	beforeEach(() => {
		users = new Users();
		//users above is the constructor fcn instance of Users.  In its constructor blueprint it is given a "users" property via this.users.  Below we are accessing the property it was given by saying users. users and setting that property equal to an aray of objects that has user data in it. 

		users.users = [{
			id: '1',
			name: 'Pascelle',
			room: 'Coffee Chat Room'
		}, {
			id: '2',
			name: 'Oliver',
			room: 'Juice Chat Room'
		}, {
			id: '3',
			name: 'Cara',
			room: 'Coffee Chat Room'
		}]
	});

	it('should add new user', () => {
		var users = new Users();
		//var users equals a new instance of Users class object
		var user = {
			id: '123',
			name: 'Pascelle',
			room: 'Moodles Room'
		};

		var resUser = users.addUser(user.id, user.name, user.room)
		//calling upon the instance of the Users class object that was stored in var users up above, then calling the addUser method that was defined in Users (over in users.js)

	expect(users.users).toEqual([user]);
	//first users refers to var users, the second users refers to the users array over in users.js (remember var users is an instance of the User class).
	//for arrays and objects you have to use toEqual instead of toBe
	//here we are saying we expect users.users to be an array with a user object inside of it, and that's exactly what it is since the addUser fcn pushes the properties of the var user into an array (you can just use plain user to describe that even though addUser in resUser access the individual properties)
	});

	it('should remove a user', () => { 
		var userId = '1';
		var user = users.removeUser(userId);
		//users refers to the var users of our seed data.  we are telling it "remove a user from this object".  the actual mechanics of doing that (accessing the array of user objects etc) are over in users.js

		expect(user.id).toBe(userId);
		expect(users.users.length).toBe(2);
	});

	it('should not remove user', () => { 
		var userId = '99';
		var user = users.removeUser(userId);
		//users refers to the var users of our seed data.  we are telling it "remove a user from this object".  the actual mechanics of doing that (accessing the array of user objects etc) are over in users.js

		expect(user).toNotExist();
		expect(users.users.length).toBe(3);
	});

	it('should find user', () => { 
		var userId = '2';
		var user = users.getUser(userId);

		expect(user.id).toBe(userId);
	});

	it('should not find user', () => { 
		var userId = '4';
		var user = users.getUser(userId);

		expect(user).toNotExist();
	});

		
	it('should return names for Coffee Chat room', () => { 
		var userList = users.getUserList('Coffee Chat Room');
		//this users refers to the var users of our seed data
		//we created a new instance of the User class, we gave it a method called getUserList and here we are testing it out.  Above in our seed data (beforeEach) we put data into it via users.users (we got the property from the constructor fcn blueprint this.users).  That data is user info (remember the constructor fcn gives every instance of User a .users property via this.users).  We now call upon this instance of User, called users as per the var above, and deploy the getUserList method on it.  Remember that this SAME instance also has a property on it call users with all of this user data as well.  It is used over in the blueprint of getUserList (in users.js).  

		expect(userList).toEqual(['Pascelle', 'Cara']);
	});

	it('should return names for Juice Chat room', () => { 
		var userList = users.getUserList('Juice Chat Room');
		//this users refers to the var users of our seed data

		expect(userList).toEqual(['Oliver']);
	});
});