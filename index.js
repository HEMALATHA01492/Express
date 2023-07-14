require('dotenv').config();
const express = require('express');
const app = express();
const cors =require('cors');
const mongoose=require('mongoose');

// //middleware
app.use(cors());
app.use(express.json());


// const url=`mongodb+srv://hema01492:9003848078@cluster0.kgdagnl.mongodb.net/NotesDB?retryWrites=true&w=majority`;
const url=process.env.ATLAS_URI;

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
const Note= mongoose.model('Note',noteSchema,'notes');//(DBNAME,SCHEMA,COLLECTION NAME)

  
//2.to get all the notes
app.get('/api/notes',(request,response)=>{
    Note.find({},{})
    .then(notes =>{
        response.status(200).json(notes);
    })
});

 //creates a new resource based on the request data
app.post('/api/notes',(request,response)=>{
    //prepare an object to store it in the collection
    const note=new Note(request.body);
    note.save()
    .then(() =>{
        response.status(201).json({message:'note made successfully'})

    })
});

//fetches a single resources based on id
app.get('/api/notes/:id',(request,response)=>{
    const id=request.params.id;

    Note.findById(id)
    .then(note=>{
    if(note){
         response.status(200).json(note);
    }else{
        response.status(400).json({message:'id does not exists'});
    }
    });
});

//     //delete a single resources based on id
    app.delete('/api/notes/:id',(request,response)=>{
        //get id
        const id=request.params.id;
    Note.findByIdAndDelete(id)
    .then((deletedNote) =>{  
    if(deletedNote){
             response.status(204).json({message:'note deleted successfully'});
    }else{
        response.status(400).json({message:'id does not exists'});
    }
    });
});

//     // replaces the entire note object identified by an id
    app.put('/api/notes/:id',(request,response)=>{
        //get id
        const id=request.params.id;
        const noteToReplace = request.body;

        Note.findByIdAndUpdate(id,noteToReplace)
        .then((updatedNote) =>{  

    if(updatedNote){
             response.status(200).json({message:'note updated successfully'});
    }else{
        response.status(404).json({message:'id does not exists'});
    }
        });
});

// //PATCH
app.patch('/api/notes/:id',(request,response)=>{
    //get id
    const id=request.params.id;
    const noteToPatch = request.body;
    Note.findByIdAndUpdate(id,noteToPatch)
    .then((updatedNote) =>{  

if(updatedNote){
         response.status(200).json({message:'note repatched'});
}else{
    response.status(400).json({message:'id does not exists'});
}
});
});

const PORT=3001;
app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)});


// const http= require('http');
// let notes=[
//     {
//         id:1,
//         content:'backend server using Nodejs',
//         important:true
//     },
//     {
//         id:2,
//         content:'backend restfuk using nodejs will grow complex',
//         important:false
//     },
//     {
//         id:3,
//         content:'express makes backend restful painless',
//         important:true
//     }
// ];

// const app=http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'application/json'});
//     response.end(JSON.stringify(notes));
// })
// const PORT=3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);


// Content-type:text/plain for normal text
// Content-type:text/html for use html tag like <h1>
// Content-type:application/json for to view json file as in json  format



// const http= require('http');

// const app=http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('<h1>Hello World</h1>');
// })
// const PORT=3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);