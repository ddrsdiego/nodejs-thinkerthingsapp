'use strict';

const mongoose = require('mongoose');
const Mediator = require('mediator-js').Mediator,
    mediator = new Mediator();
const firstContactRepository = require('../repositories/first-contact-repository');
const registerFirstContactHandler = require('../handlres/first-contact/register-first-contact-handler');

exports.registerFirstContact = async(req, res, next) => {
    mediator.publish("registerFirstContact", req.body);
    await mediator.subscribe("registerFirstContact", (command) => {
        registerFirstContactHandler.registerFirstContact(command);
    });
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