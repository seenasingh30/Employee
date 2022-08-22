const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    desgination: {
        type: String,
        default: 'Employee'
    },
    linkedIn : {
        type : String
    }

},{
    timestamps: true
});

module.exports = mongoose.model('users', userSchema);