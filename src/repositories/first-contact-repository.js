'use strict';

const mongoose = require('mongoose');
const FirstContactModel = mongoose.model('FirstContact');

exports.getFirstContactByEmail = async(email) => {
    return await FirstContactModel
        .find({
            email: email
        });
};

exports.getFirstContactByProtocolNumber = async(protocolNumber) => {
    let contactResult = {};
    let contact = await FirstContactModel
        .findOne({
            protocolNumber: protocolNumber
        }, 'name email phoneNumberContact');

    contactResult = {
        name: contact.name,
        email: contact.email,
        phoneNumberContact: contact.phoneNumberContact
    };

    return contactResult;
};

exports.registerFirstContact = async(data) => {
    var firstContact = new FirstContactModel(data);
    await firstContact.save();
};