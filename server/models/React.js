//Import mongoose
const { Schema, SchemaTypes, model } = require('mongoose');

const ReactSchema = new Schema({
    post: {
        type: SchemaTypes.ObjectId,
        ref: 'Post'
    },
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    emoji: {
        type: String
    }
})

const React = model('React', ReactSchema);
module.exports = React;