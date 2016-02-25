/*
   file; index.js
   author; Josh Mineiro
   website; http://comp2068-midterm-jm.azurewebsites.net
   description; routes users to different pages of the website
*/

var express = require('express');
var router = express.Router();
/* GET landing page. */
router.get('/', function (req, res, next) {
    res.render('landing', { title: 'Home' });
});
/* GET people page. */
router.get('/people', function (req, res, next) {
    res.render('people', { title: 'People' });
});
/* GET contact page. */
router.get('/contact', function (req, res, next) {
    res.render('contact', { title: 'Contact' });
});
module.exports = router;

//# sourceMappingURL=index.js.map
