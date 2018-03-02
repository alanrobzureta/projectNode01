const mongoose = require('mongoose')
require('mongoose-type-email')

const User = new mongoose.Schema({
    name : {
        type: String,
        required: true
    },
    username: {
        type:String,
        required, tue
    },
    email: {
        type: mongoose.SchemaTypes.email,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('User', User)