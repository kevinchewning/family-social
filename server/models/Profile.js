//Import mongoose schema
const { Schema, SchemaTypes, model } = require('mongoose');

const ProfileSchema = new Schema({
    //User
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    //Profile Picture
    profilePicture: {
        type: String,
    },
    //Background Picture
    backgroundPicture: {
        type: String
    },
    //Posts
    posts: [{
        type: SchemaTypes.ObjectId,
        ref: 'Post'
    }],
    //Events
    events: [{
        type: SchemaTypes.ObjectId,
        ref: 'Event'
    }],
    //RSVPs
    rsvps: [{
        type: SchemaTypes.ObjectId,
        ref: 'Event'
    }],
    //Notifications
    notifications: {
        type: String
    }
});

const Profile = model('Profile', ProfileSchema);
module.exports = Profile;

