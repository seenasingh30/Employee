const express = require('express');
const router = express.Router();
const controller = require('./controller');
const authentication = require("../../middleware/authentication");

router.post('/',controller.create);
router.post('/login',controller.login);
router.get('/:id?', controller.get);
router.put('/:id?', controller.update);
router.delete('/:id?', controller.delete);
// auth based 

// router.get('/:id?', authentication, controller.get);
// router.put('/:id?', authentication,controller.update);
// router.delete('/:id?',authentication, controller.delete);

module.exports = router;