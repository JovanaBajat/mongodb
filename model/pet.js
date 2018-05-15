const mongoose = require('mongoose');

const newPet = mongoose.Schema({
    name: { 
        type: String, 
        required: true 
    },
    type: { 
        type: String, 
        required: true 
    },
    photos: [{ 
        type: String 
    }],
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Owner' 
    },
    comment: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'animalComment' 
    },
 
});

module.exports = mongoose.model('Pet', newPet);