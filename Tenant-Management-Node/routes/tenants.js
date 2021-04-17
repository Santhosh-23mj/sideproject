var express = require('express');
var router = express.Router();

// Add Tenant
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
            name: "Error",
            message: "Unknown Error occured"
        });
    }
});

// Edit Tenant
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
            name: "Error",
            message: "Unknown Error occured"
        });
    }
});

// Delete Tenant
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
            name: "Error",
            message: "Unknown Error occured"
        });
    }
});