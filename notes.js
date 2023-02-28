const fs = require('fs');
const chalk = require('chalk');

// addNote
const addNote = (title, body) =>{
    const notes = loadNote();
    // const duplicateNotes = notes.filter((note)=>note.title === title);
    const duplicateNote = notes.find((note)=>note.title === title);


    // console.log(duplicateNotes);
    if(duplicateNote !== undefined){
        console.log(chalk.bgRed.bold('Note title taken!'));
        // console.log('Note title taken!');
    }
    else{
        notes.push({
            title: title,
            body: body
        });
        saveNote(notes);
        console.log(chalk.bgGreen.bold('New note added!'));
       // console.log('New note added!');
    }
}

// loadNote
const loadNote = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }
    catch(e){
        return [];
    }
}

// saveNote
const saveNote = (notes) =>{
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
}

// removeNote
const removeNote = (title) =>{
    const notes = loadNote();
    const notesToKeep = notes.filter((note)=>note.title !== title);
    if(notesToKeep.length === notes.length){
        console.log(chalk.bgRed.bold('No note found!'));
    }
    else{
        saveNote(notesToKeep);
        console.log(chalk.bgGreen.bold('"' + title + '"' +' note removed!'));
    }
}

// listNote
const listNote = ()=>{
    const notes = loadNote();
    console.log(chalk.bgWhite.bold('Your notes: '));
    notes.forEach((note) =>  console.log(note.title));
}

// readNote
const readNote = (title) =>{
    const notes = loadNote();
    const note = notes.find((note)=>note.title===title); 
    if(note){
        console.log(chalk.blue.bold(title.toString()) + ': '+ note.body);
    }
    else{
        console.log(chalk.bgRed.bold('Note not found!'));
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}