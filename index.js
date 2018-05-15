const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const router = require('./routes/routes');


mongoose.connect('mongodb://localhost:27017/petsitting', function() {
    console.log("Database initialized...");
});

const app = express();

app.use('/', router);

app.listen(8080, function() {
    console.log("app is listening on port 8080...");
});