var express = require('express');
var router = express.Router();

// Get Houses
router.get('/getAll/:houseOwnerId', function (req, res) {
    try {
        sampleService.sampleFunction(function (err, response) {
            if (!err) {
                res.send(response);
            } else {
                res.status(500).send({
                    name: err.name,
                    message: err.message
                });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            name: err.name,
            message: err.message
        });
    }
});

// Get House
router.get('/get/:houseId', function (req, res) {
    try {
        sampleService.sampleFunction(function (err, response) {
            if (!err) {
                res.send(response);
            } else {
                res.status(500).send({
                    name: err.name,
                    message: err.message
                });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            name: err.name,
            message: err.message
        });
    }
});

// Add Houses
router.post('/add', function (req, res) {
    try {
        sampleService.sampleFunction(function (err, response) {
            if (!err) {
                res.send(response);
            } else {
                res.status(500).send({
                    name: err.name,
                    message: err.message
                });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            name: err.name,
            message: err.message
        });
    }
});

// Edit House
router.put('/edit', function (req, res) {
    try {
        sampleService.sampleFunction(function (err, response) {
            if (!err) {
                res.send(response);
            } else {
                res.status(500).send({
                    name: err.name,
                    message: err.message
                });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            name: err.name,
            message: err.message
        });
    }
});

// Delete Houses
router.delete('/delete', function (req, res) {
    try {
        sampleService.sampleFunction(function (err, response) {
            if (!err) {
                res.send(response);
            } else {
                res.status(500).send({
                    name: err.name,
                    message: err.message
                });
            }
        });
    }
    catch (err) {
        res.status(500).send({
            name: err.name,
            message: err.message
        });
    }
});