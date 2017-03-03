//UNIX epiq
//UTC means timezone independent
//base time is January 1, 1970

var moment = require('moment');

var someTimestamp = moment().valueOf();
//same as new Date().getTime()

var createdAt = 1234;
var date = moment(createdAt);
//creates a new moment obj that represents the current point in time
//by passing in createdAt it uses that time

console.log(date.format('MMM Do, YYYY'));
//gets shorthand version of the moment.  Basically put what you are looking for in the string
//momentjs.com "displaying"