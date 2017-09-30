'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FirstContact = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        index: true
    },
    phoneNumberContact: {
        type: String,
        required: true,
        trim: true
    },
    createdDate: {
        type: Date,
        required: true,
        default: Date.now
    },
    status: {
        type: String,
        required: true,
        enum: ['registered', 'attended', 'process', 'closed'],
        default: 'registered'
    },
    protocolNumber: {
        type: String,
        required: true,
        trim: true,
        index: true        
    }
});

module.exports = mongoose.model('FirstContact', FirstContact);