const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { weather: null, error: null});
});

module.exports = router;
