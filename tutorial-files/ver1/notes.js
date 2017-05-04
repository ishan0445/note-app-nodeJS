console.log('Starting notes.js');

// console.log(module);		// module is a in built variable storing various values


module.exports.age = 25;

module.exports.addNote = () => {		//error function
	console.log('addNote');
	return 'New Note';
}


module.exports.add = (a, b) => {
	return (a+b);
}

// module.exports.addNote = function(){

// }