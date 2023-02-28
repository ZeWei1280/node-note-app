const yargs = require('yargs');
const notes = require('./notes.js');
//-----

yargs.version('1.1.0');
// Create add command

yargs.command({
    command:'add',
    describe: 'Add a new note', 
    builder: { //設定要擷取的參數
        title: {
            describe: 'Note Title',
            demandOption: true, 
            type: 'string' //輸入的title指定為string，否則輸入空字串會為false, 非''
        }, 
        body:{
            describe: 'Thos is a body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

// Create list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler(){
        notes.listNote();
    }
});

// Create read Commend
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Title name',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
});

// const commend = process.argv[2];
// console.log(process.argv);

// console.log(yargs.argv);
yargs.parse(); //解析輸入，不然不做事



