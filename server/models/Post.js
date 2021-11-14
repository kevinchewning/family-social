//Import mongoose schema
const { Schema, SchemaTypes, model } = require('mongoose');

const PostSchema = new Schema({
    //User
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    //Text
    text: {
        type: String
    },
    //Media
    media: {
        type: String
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
    //Reacts
    reacts: [{
        type: SchemaTypes.ObjectId,
        ref: 'React'
    }],
    //Comments
    comments: {
        type: SchemaTypes.ObjectId,
        ref: 'Comment'
    }
});

const Post = model('Post', PostSchema);
module.exports = Post;