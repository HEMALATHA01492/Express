// load mongoose since we need it to define a model
const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    content: String,
    important: Boolean
});

// export the model
module.exports = mongoose.model('Note', NoteSchema,'notes');