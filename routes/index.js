const express = require('express');
const router = express.Router();
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');
// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('login'));

// router to index
router.get('/homepage', ensureAuthenticated, function(req, res) {
  res.render('index', {
     user: req.user 
   }) 
});

router.get('/tank', ensureAuthenticated, function(req, res) {
  res.render('tank') 
});
router.get('/Chart', ensureAuthenticated, function(req, res) {
  res.render('Chart') 
});
router.get('/Gauge', ensureAuthenticated, function(req, res) {
  res.render('Gauge') 
});
router.get('/design', ensureAuthenticated, function(req, res) {
  res.render('designPage') 
});
router.get('/test', ensureAuthenticated, function(req, res) {
  res.render('test') 
});

module.exports = router;
