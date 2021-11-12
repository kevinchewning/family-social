//Import mongoose schema
const { Schema, SchemaTypes, model } = require('mongoose');
//Import bcrypt for password hashing
const bcrypt = require('bcrypt');

//Create User Schema
const UserSchema = new Schema({
    //First Name
    firstName: {
        type: String,
        required: true
    },
    //Last Name
    lastName: {
        type: String,
        required: true
    },
    //Email
    email: {
        type: String,
        required: true,
        unique: true
    },
    //Password
    password: {
        type: String,
        required: true
    }
},
{
    //Allow virtual attributes
    toJSON: {
        virtuals: true
    }
});

//Virtual for full name
UserSchema.virtual('fullName').get(() => {
    const fullName = `${this.firstName} ${this.lastName}`
    return fullName;
})

//Hash password for new Users
UserSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
})

//Check password for login
UserSchema.methods.checkPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}