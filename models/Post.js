const mongoose = require('mongoose');

//schema for the posts
const PostSchema = mongoose.Schema({
    title: {
        type:String,
        required: true
    },
    description: {
        type:String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

//exporting the schema
module.exports = mongoose.model('Posts', PostSchema);

//i swear to write actual code tommroow
//just bear this commit for now