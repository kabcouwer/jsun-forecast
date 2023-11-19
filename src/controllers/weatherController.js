const openWeatherService = require('../services/openWeatherService');
// const Weather = require('../models/weatherModel');

async function getWeatherByCity(req, res) {
  const city = req.params.city;
  
  try {
    const weatherData = await openWeatherService.getWeatherByCity(city);
    res.json(weatherData);
  }
  catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {
  getWeatherByCity
};
