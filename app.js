/* load the module */
const _ = require('lodash');
const fs = require('fs');
const yargs = require('yargs');

console.log('Starting app..')

/* load own module */
const notes = require('./notes')

const argv = yargs.argv;
/* Get the command */
let command = argv._[0];
if (command) {
  console.log('Command: ' + command);
  /* check the command */
  if (command === 'read') {
    let note = notes.read(argv.title);
    if(note) {
      console.log("Showing your note!");
      notes.printNote(note);
    } else {
      console.log("Note not found!");
    }
  } else if (command === 'remove') {
    let removeNote = notes.remove(argv.title);
    /* is note successfuly deleted? */
    let message = removeNote ? `Note with title ${argv.title} was removed!` : 'Note not found!';
    console.log(message);
  } else if (command === 'update') {
    notes.update();
  } else if (command === 'add') {
    let note = notes.add(argv.title, argv.body);
    /* is Note successfuly added? */
    if(note) {
      console.log('successfully added new note!');
      notes.printNote(note);
    } else {
      console.log("Can't add new note because title was taken!");
    }
  } else if(command === "list" ) {
    notes.getNotes();
  } else {
    console.log('command not recognized!')
  }
}