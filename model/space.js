const mongoose = require('mongoose');

const newSpace = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    address: { 
        type: String, 
        required: true 
    },
    maxcapacity: {
        type: Number,
        required: true
    },
    photo: { 
        type: String 
    },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Owner' 
    },

});

module.exports = mongoose.model('Space', newSpace);