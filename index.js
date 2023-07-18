const express = require('express');
const app = express();
const cors =require('cors');
const mongoose=require('mongoose');
const logger = require('./utils/logger');
const config = require('./utils/config');
const notesRouter =require('./controllers/notes')

 

// const url=`mongodb+srv://hema01492:9003848078@cluster0.kgdagnl.mongodb.net/NotesDB?retryWrites=true&w=majority`;
// const url=process.env.ATLAS_URI;

mongoose.connect(config.MONGODB_URI)
.then( ()=> logger.info('Connected to mongodb'))
.catch((err)=>logger.error(logger.error.message));

//middleware
app.use(cors());
app.use(express.json());

app.use('/api/notes',notesRouter);


app.listen(config.PORT,() =>{
    logger.info(`Server running on port ${config.PORT}`);

})
 module.exports = app;

