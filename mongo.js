const mongoose=require('mongoose');

// console.log(process.argv); objects insert using terminal

const url=`mongodb+srv://hema01492:9003848078@cluster0.kgdagnl.mongodb.net/NotesDB?retryWrites=true&w=majority`;

mongoose.connect(url)
.then( ()=> console.log('Connected to mongodb'))
.catch((err)=> console.log(err));

//save a note in a DB
//define a schema

const noteSchema= new mongoose.Schema({
    content:String,
    important:Boolean
});

//create a note
// const Note= mongoose.model('Note',noteSchema);//collection name :notes or u give('Note',noteSchema,notes)
const Note= mongoose.model('Note',noteSchema,'notes');//collection name :notes or u give('Note',noteSchema,notes)

//actual data to store in the DB
// const note = new Note({
//     content:'mongodb connection using mongoose library',
//     important:false,
// })

// let notes=[
//     {
//         content:'data1',
//         important:true,
//     },
//     {
//         content:'data2',
//         important:true,
//     }
// ]
// notes.forEach(note =>{
//     let noteModel= new Note(note);
//     noteModel.save()
//     .then(()=>console.log('note saved'));
// })
//save notes in DB
// note.save()
// .then((result) =>{
//     console.log('note saved');
//     mongoose.connection.close();
// })

//to find data
Note.find({},{})
.then(notes =>{
    notes.forEach(note =>{
        console.log(note)
    })
   
    mongoose.connection.close();
})