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
    mark: {
        type: Number
    }
});

module.exports = mongoose.model('AnimalComment', newComment);