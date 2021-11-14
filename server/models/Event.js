//Import mongoose
const { Schema, SchemaTypes, model } = require('mongoose');

const EventSchema = new Schema({
    //Host
    host: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    //Date
    date: {
        type: Date
    },
    //Attendees
    attendees: [{
        type: SchemaTypes.ObjectId,
        ref: 'User'
    }]
});

const Event =  model('Event', EventSchema);
module.exports = Event;