const mongoose = require('mongoose');

const newReservation = mongoose.Schema({
    start: {
        type: Date,
        required: true
    },
    end: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Reservations', newReservation);