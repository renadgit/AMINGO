//import mongoose
const mongoose = require('mongoose');

//assign the schema object
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName:
    {
        type: String,
        require: true
    },
    lastName: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    },
    occupation: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = User = mongoose.model('user', UserSchema);