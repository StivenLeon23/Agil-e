const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 6,
        max:250
    },
    email: {
        type: String,
        require: true,
        min: 6,
        max:1024
    },
    password: {
        type: String,
        require: true,
        minlength:6
        
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User',userSchema)