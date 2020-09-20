const express = require('express');
const router = express.Router();
router.get('/', (req, res, next) => {
    const name = req.query.name;
    res.render('hello', { name: name });
});

module.exports = router;