var isRealString = (str) => {
	return typeof str === 'string' && str.trim().length > 0;
	//returns true or false but does not take into account for spaces so need to use trim method
};

module.exports = {isRealString};