//Import mongoose
const { Schema, SchemaTypes, model } = require('mongoose');

const CommentSchema = new Schema({
    //Author
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    //Created On
    createdOn: {
        type: Date,
        default: Date.now
    },
    //Modified On
    modifiedOn: {
        type: Date
    },
    //Text
    text: {
        type: String
    },
    //Media
    media: {
        type: String
    }
})

const Comment = model('Comment', CommentSchema);
module.exports = Comment