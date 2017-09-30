'use strict';

const mongoose = require('mongoose');
const firstContactRepository = require('../repositories/first-contact/first-contact-repository');

exports.registerFirstContact = async(req, res, next) => {
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

exports.getFirstContactByEmail = async(req, res, next) => {
    try {
        console.log(req.params.email);
        let contacts = await firstContactRepository.getFirstContactByEmail(req.params.email);
        res.status(200).send(contacts);
    } catch (error) {
        res.status(500).send({
            error: error
        });
    }
};

exports.getFirstContactByProtocolNumber = async(req, res, next) => {
    try {
        let contact = await firstContactRepository.getFirstContactByProtocolNumber(req.params.protocol);
        res.status(200).send(contact);
    } catch (error) {
        res.status(500).send({
            error: error
        });
    }
};