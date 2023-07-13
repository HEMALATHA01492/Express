//after install of EXPRESS

const express = require('express');
const app = express();
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
    const PORT=3001;
app.listen(PORT,()=>{
console.log(`Server running on port ${PORT}`)});

//1.set the endpoints(different end points )
app.get('/',(request,response)=>{
    //2. response.send('<h1>Hello World<h1>')
    response.send('<h1>Notes App<h1>')
    //1. response.send('Hello world')
});
 
//2.to get all the notes
app.get('/api/notes',(request,response)=>{
    response.json(notes);
});



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