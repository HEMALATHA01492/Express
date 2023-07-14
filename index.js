//after install of EXPRESS

const express = require('express');
const app = express();
// //middleware
app.use(express.json());
let notes=[
        {
            id:1,
            content:'backend server using Nodejs',
            important:true
        },
        {
            id:2,
            content:'backend restfuk using nodejs will grow complex',
            important:false
        },
        {
            id:3,
            content:'express makes backend restful painless',
            important:true
        }
    ];
   
// //1.set the endpoints(different end points )
// app.get('/',(request,response)=>{
//     //2. response.send('<h1>Hello World<h1>')
//     response.send('<h1>Notes App<h1>')
//     //1. response.send('Hello world')
// });
 
//2.to get all the notes
app.get('/api/notes',(request,response)=>{
    response.status(200).json(notes);
});

// //creates a new resource based on the request data
app.post('/api/notes',(request,response)=>{
    //1.  console.log(request.body);
    //1. response.status(201).json({message:'post request made successfully'})

    notes = notes.concat(request.body);
    response.status(201).json({message:'note made successfully'})
});

//fetches a single resources based on id
app.get('/api/notes/:id',(request,response)=>{
    const id=request.params.id;
    const note=notes.find(note => note.id == id);
    if(note){
             response.status(200).json(note);
    }else{
        response.status(400).json({message:'id does not exists'});
    }
    })

    //delete a single resources based on id
    app.delete('/api/notes/:id',(request,response)=>{
        //get id
        const id=request.params.id;
    const note=notes.find(note => note.id == id);
    notes=notes.filter(note => note.id != id);
    if(note){
             response.status(204).json(note);
    }else{
        response.status(400).json({message:'id does not exists'});
    }
    })

    // replaces the entire note object identified by an id
    app.put('/api/notes/:id',(request,response)=>{
        //get id
        const id=request.params.id;
        const noteToReplace = request.body;
        const note=notes.find(note => note.id == id);
        notes=notes.map(note => note.id == id ? noteToReplace:note)
    if(note){
             response.status(200).json({message:'note repalced'});
    }else{
        response.status(400).json({message:'id does not exists'});
    }
})

//PATCH
app.patch('/api/notes/:id',(request,response)=>{
    //get id
    const id=request.params.id;
    const noteToReplace = request.body;
    const note=notes.find(note => note.id == id);
    notes=notes.map(note => note.id == id ? {...note,...noteToReplace}:note)
if(note){
         response.status(200).json({message:'note repatched'});
}else{
    response.status(400).json({message:'id does not exists'});
}
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