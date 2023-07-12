const http= require('http');
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

const app=http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'});
    response.end(JSON.stringify(notes));
})
const PORT=3001;
app.listen(PORT);
console.log(`Server running on port ${PORT}`);



// const http= require('http');

// const app=http.createServer((request,response)=>{
//     response.writeHead(200,{'Content-Type':'text/html'});
//     response.end('<h1>Hello World</h1>');
// })
// const PORT=3001;
// app.listen(PORT);
// console.log(`Server running on port ${PORT}`);