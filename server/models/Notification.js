//Import mongoose
const { Schema, SchemaTypes, model } = require('mongoose');

const NotificationSchema = new Schema ({
    //User
    user: {
        type: SchemaTypes.ObjectId,
        ref: 'User'
    },
    //Content
    content: {
        type: String
    },
    //isNew
    isNew: {
        type: Boolean,
        default: true
    }
})

const Notification = model('Notification', NotificationSchema);
module.exports = Notification;