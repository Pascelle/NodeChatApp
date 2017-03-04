//we're going to create an array of users that we get from socket.id because we do not store the info from params.name or params.room

//we're using ES6 classes here. Class keyword, common convention is the capitalized class name (because new anything in JS you capitalize the first letter, this is naming convention)

//with classes you can add a constructor function.  it is a special fcn that is specific to the class.  it automatically fires and lets you initialize the instance of your class.  In this case we want to do something to customized an individual person when a new person is created.  Constructor fcns get automatically called so you do not need to manually call it.  It gets called with the arguments that you specify in the instance (so here it gets called with the arguments specified in Person).  when we console.log it it prints out Pascelle, 33 because var me passed the arguments to the constructor.  But as it is right now we are setting name and age for all Person objects.  If we want to set the name and age for a specific person we need to use the "this" keyword.  In class methods and in the constructor function "this" refers to the instance as opposed to the class.

//methods can be any function---maybe they take arguments or don't and to define them all we do is: without adding a comma (another quirk of the class syntax) we specify our method name, here called getUserDescription

//class is the group, constructor fcn (this is optional) returns an obj that contains the blueprint for the group.  after that we can define what methods are available to the group, like getUserDescription

// class Person {
// 	constructor (name, age) {
// 		//console.log(name, age)
// 		this.name = name; // this refers to the individual instance
// 		this.age = age;

// 	}

// 	getUserDescription () {
// 		return `${this.name} is ${this.age} year(s) old`;
// 		//we want to use the specific values for this individual person
// 	}
// }

// var me = new Person('Pascelle', 33);
// //I can pass in the arguments from this var into the constructor

// //"me" is identical to "this" up above
// console.log('this.name', me.name);
// //this prints "pascelle" in console

// var description = me.getUserDescription();
// console.log(description);

class Users {
	constructor () {
		this.users = [];
		//users property created.  this refers to the individual Users list.  there can be many users lists because there are multiple chat rooms
	}

	addUser (id, name, room) {
		var user = {id, name, room}
		//es6 so id is property id with value of id
		this.users.push(user);
		//pushes it onto the array
	}

	removeUser (id) {
		var user = this.getUser(id);
		
		if (user) {
			this.users = this.users.filter((user) => user.id !== id);
			//return true to keep it in the array
			//So it returns an array of all users whom do not match the id
		} {
			return user //return undefined
		}
	}
		
	getUser (id) {
		return this.users.filter((user) => user.id === id)[0];
		//remember ES6 implicit return.  This is saying return any user whose id matches the argument id.  it returns that object in an array so to get access to that property we have to specify the first index position, which is 0.
	}

	getUserList (room) {
		var users = this.users.filter((user) => {
			//filter takes a fcn as its argument.  this fcn gets called with each individual user, we return true to keep it in the array, false to remove it
			//"this" is the current instance of the User class we are in.  Remeber up top every instance in the user class is given a .users property (in the constructor fcn part).  we know what "this" is referring to by looking at the getUserList that calls it (over in users.test.js).  That is the instance of user that "this" refers to.
			//"this" says wherever you deploy getUserList...look to the object that is calling it (i.e. the one it is attached to), that is what "this" refers to

			return user.room === room;
			//filtering by what room the user is in vs the room we are checking for
			//ES6 structure would be var users = this.users.filter((user) => user.room === room
		});

		var namesArray = users.map((user) => user.name);
		//we are converting the array of objects to an array of strings bc all we want is a list of name
		//map takes a fcn, gets called with indiviudal item and lets us return the value from that item.  SO here we are getting the individual user's name
		//use ES6 syntax with implicit returns

		return namesArray;
	}
}

module.exports = {Users};