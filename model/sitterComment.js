const mongoose = require('mongoose');

const newComment = mongoose.Schema({
    contenu: { 
        type: String, 
        required: true 
    },
    author: { 
        type: String, 
        required: true 
    },
    note: {
        type: Number
    }
});

module.exports = mongoose.model('SitterComment', newComment);