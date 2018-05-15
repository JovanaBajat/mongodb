const mongoose = require('mongoose');

const newSitter = mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    // photo: { 
    //     type: String 
    // },
    // rib: {
    //    type: String
    // },
    // space: [{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'Space' 
    // }],
    // comment: [{
    //     type: mongoose.Schema.Types.ObjectId, 
    //     ref: 'sitterComment' 
    // }],
});

module.exports = mongoose.model('Sitter', newSitter);