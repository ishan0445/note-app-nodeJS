const fs = require('fs');
const yargs = require('yargs')
const notes = require('./notes.js');


const titleOptions = {
			describe: 'Title of the note',
			require: true,
			alias: 't'
		}
const bodyOptions = {
			describe: 'Body of the note',
			require: true,
			alias: 'b'
		}
var argv = yargs
	.command('add','Add a new note',{
		title: titleOptions,
		body: bodyOptions
	})
	.command('list','List all nodes')
	.command('read','Read a note',{
		title: titleOptions
	})
	.command('remove','Remove a note',{
		titleOptions
	})
	.help()
	.argv;


var command = argv._[0];

if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`)
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'add') {
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		notes.logNote(note);
	}else{
		console.log(`Note with title "${argv.title}" already exists!`);
	}
} else if (command === 'read') {
	var note = notes.readNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log(`Note with title "${argv.title}" not found!`);
	}
} else if (command === 'remove') {
	var isNoteRemoved = notes.removeNote(argv.title);
	var msg = isNoteRemoved ? 'Note removed succesfully' : 'Note title does not exists' ;
	console.log(msg);
} else {
	console.log('Command not recognized');
}