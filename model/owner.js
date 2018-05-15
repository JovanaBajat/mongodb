const mongoose = require('mongoose');

const newOwner = mongoose.Schema({
    username: { 
        type: String, 
        required: true 
    },
    email: { 
        type: String, 
        required: true 
    },
    photo: { 
        type: String 
    },
    rib: {
        type: String 
    },
    pets: [{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Pet' 
    }]
});

module.exports = mongoose.model('Owner', newOwner);