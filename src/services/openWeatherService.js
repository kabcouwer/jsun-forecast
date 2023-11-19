const fetch = require('node-fetch');
const Weather = require('../models/weatherModel');
const config = require('../config/config');

async function getWeatherByCity(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${config.openWeatherApiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    const weatherData = new Weather(city, data.main.temp, data.weather[0].description);
    return weatherData;
  }
  catch (error) {
    console.log(error);
  }
}

module.exports = {
  getWeatherByCity
};
