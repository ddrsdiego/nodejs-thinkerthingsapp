const mongoose = require('mongoose');
const firstContactRepository = require('../repositories/');

exports.registerFirstContact = async(command) => {
    try {
        req.body
        await firstContactRepository
            .registerFirstContact({
                name: req.body.name,
                email: req.body.email,
                phoneNumberContact: req.body.phoneNumberContact,
                protocolNumber: '201709301415'
            });
        res.status(201).send({
            protocolNumber: '201709301415'
        });
    } catch (error) {
        res.status(500).send({
            error: error
        });
    }
};