console.log('Starting app..');

//inbuilt modules
const fs = require('fs');
const os = require('os');

//user defined modules
const notes = require('./notes.js');

// npmjs.com modules
// "npm init" - to create package.json file
// Install module using: "npm install <module-name> --save"
// --save to update module in package.json file
// DONOT send node_modules dir to anyone -- tell them to run "npm install"
// loads pckage.json and installs dependencies automatically ____↑
const _ = require('lodash');

var filteredArray = _.uniq(['Ishan', 1, 2, 3, 'Ishan', 3, 2]);
console.log(filteredArray);

console.log(_.isString('Ishan'));
console.log(_.isString(2));

// console.log(notes.age);

// var user = os.userInfo();		//JSON Object is returned
// console.log(user.username);    

// fs.appendFile('greetings.txt','Hello '+user.username+'!\n', function(err){
// 	if(err){
// 		console.log('Error occured');
// 	}
// });

// var note = notes.addNote();		//getting addNote function

// //Can also be done like this			↴
// fs.appendFile('greetings.txt',`Hello ${user.username}! you are ${notes.age} yrears old.\nYour note in ${note}\n`, function(err){
// 	if(err){
// 		console.log('Error occured');
// 	}
// });

// console.log('Result: ' + notes.add(5,6));