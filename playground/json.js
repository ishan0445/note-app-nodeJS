// // JavaScript Object to JSON String
// var JSONObject = {
// 	name: 'Ishan',
// 	age: 23
// }

// var JSONString = JSON.stringify(JSONObject);
// console.log(typeof JSONString);
// console.log(JSONString);


// //JSON String to JavaScript Object
// var JSONString = '{"name":"Anjali Pandey","age": 23}';
// var JSONObject = JSON.parse(JSONString);
// console.log(typeof JSONObject);
// console.log(JSONObject);

// // Saving Note 
// const fs = require('fs');

// var JSONObject = {
// 	name: 'Ishan',
// 	age: 23
// }

// var JSONString = JSON.stringify(JSONObject);
// fs.writeFileSync('notes.json',JSONString);


// var readString = fs.readFileSync('notes.json');
// var obj = JSON.parse(readString);

// console.log(typeof obj);
// console.log(obj.name);
// console.log(obj.age);
