const router = require('express').Router();
const aboutCController = require('./../controller/aboutCController');
const auth = require('./../helpers/auth');

router.route('/').get(auth, aboutCController.gpage);

module.exports = router;
