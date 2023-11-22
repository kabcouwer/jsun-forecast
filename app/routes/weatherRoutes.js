const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

router.get('/weather', async (req, res) => {
  const city = req.query.city;
  const weatherData = await weatherController.getWeatherByCity(city);
  res.render('index', { weather: weatherData, error: null });
});

module.exports = router;
