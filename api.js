
const { Router } = require('express');
const router = new  Router()
const version = process.env.version;

console.log("running on version: " + version);
router.route('/').get((req, res) => {
    res.json({ message: 'WELCOME TO Employee Service APP.' });
  });
router.use(`/${version}/users`, require('./modules/users/index'));

module.exports = router;


