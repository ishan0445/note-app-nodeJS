const fs = require('fs');
const JSON_DATA_FILE_NAME = 'notes-data.json';

var fetchNotes = () =>{
	try{
		var noteString = fs.readFileSync(JSON_DATA_FILE_NAME);
		return JSON.parse(noteString);
	}catch(err){ 
		return [];
	}
};

var saveNotes = (notes) =>{
	fs.writeFileSync(JSON_DATA_FILE_NAME,JSON.stringify(notes));
}


var addNote = (title, body) => {
	var notes = fetchNotes();
	var noteObj = {
		title,
		body
	};
	var duplicates = notes.filter((notes) => notes.title === title);
	// // Above statement is a shorthand for below set of statements
	// var duplicates = notes.filter((notes) => {
	// 	return notes.title === title;
	// });


	if(duplicates.length === 0 ){
		notes.push(noteObj);
		saveNotes(notes);
		return noteObj;
	}
};


var getAll = () => {
	return fetchNotes();
};

var removeNote = (title) => {
	var notes = fetchNotes();
	var notesToBeKept = notes.filter((notes) => notes.title !== title );
	saveNotes(notesToBeKept);
	return notes.length !== notesToBeKept.length;
};

var readNote = (title) => {
	var notes = fetchNotes();
	var noteObj = notes.filter((notes) => notes.title === title);
	return noteObj[0];
};


var logNote = (note) => {
	console.log(`--\nTitle: ${note.title}\nBody: ${note.body}`);
}

module.exports = {
	// addNote: addNote,   #this is same as writing just addNote: addNote , it tells what function to call when some one calls the left side function,since both are same, we write just addNote
	addNote,
	getAll,
	removeNote,
	readNote,
	logNote
};