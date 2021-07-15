const mongoose = require('mongoose')

// const favoriteSchema = new mongoose.Schema({
//     title: String,
    
// })

const UserSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: String,
    favorites: [String],

}, {
    timestamps: true
})

module.exports = UserSchema