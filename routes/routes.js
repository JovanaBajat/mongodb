const express = require('express');
const Sitter = require('../model/sitter');

const router = express.Router();

router.get('/', (req, res) => {
    Sitter.find({}, (err, sitters) => {
        if (err) {
            res.send(err);
        }
        res.json({ sitters });
    });
});

router.post('/add', express.json(), (req, res) => {
    const newSitter = new Sitter(req.body);

    newSitter.save((err) => {
        if (err) {
            res.send(err);
        }
        res.json({
            "success": `New sitter added`
        });
    });
});

router.post('/update/:id', express.json(), (req, res) => {
    Sitter.findByIdAndUpdate(req.params.id, req.body, (err, sitter) => {
        if (err) {
            res.send(err);
        }
        res.json({
            "success": "Sitter has been modified"
        })
    });
});

router.post('/delete/:id', express.json(), (req, res) => {
    Sitter.findByIdAndRemove(req.params.id, (err, sitter) => {
        if (err) {
            res.send(err);
        }
        res.json({
            "success": "Sitter has been deleted"
        })
    });
});


module.exports = router;