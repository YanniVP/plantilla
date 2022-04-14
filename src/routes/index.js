const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    res.render('index',{title:'Plantilla basic'});
});

router.get('/contact', (req,res) => {
    res.render('contact',{title:'Contactenos'});
});

module.exports = router;