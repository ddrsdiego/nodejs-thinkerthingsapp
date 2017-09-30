'use strict';

const express = require('express');
const router = express.Router();
const firstContactController = require('../controllers/first-contact-controller');

router.get('/:email', firstContactController.getFirstContactByEmail);
router.get('/protocol-number/:protocol', firstContactController.getFirstContactByProtocolNumber);

router.post('/', firstContactController.registerFirstContact);

module.exports = router;