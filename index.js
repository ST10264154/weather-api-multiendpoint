const express = require('express');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config(); 

const app = express();
const port = 3000;

const API_KEY = process.env.OPENWEATHER_API_KEY;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('🌍 Weather API is running!');

});
  
app.get('/add', (req, res) => {
    const { a, b } = req.query;
    const sum = Number(a) + Number(b);
    res.json({ result: sum });
});
  
app.post('/reverse', (req, res) => {
    const { text } = req.body;
    if (!text) return res.status(400).json({ error: 'Missing text field' });
    const reversed = text.split('').reverse().join('');
    res.json({ reversed });
});
  
app.get('/time', (req, res) => {
    res.json({ time: new Date().toISOString() });
});
  
  app.get('/random', (req, res) => {
    const random = Math.floor(Math.random() * 1000);
    res.json({ random });
});

app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  try {
    const response = await axios.get(url);
    const data = response.data;

    res.json({
      city: data.name,
      temperature: `${data.main.temp} °C`,
      condition: data.weather[0].description,
      humidity: `${data.main.humidity}%`,
      wind_speed: `${data.wind.speed} m/s`
    });
  } catch (error) {
    if (error.response?.status === 404) {
      res.status(404).json({ error: 'City not found' });
    } else {
      res.status(500).json({ error: 'Failed to fetch weather data' });
    }
  }
});

app.listen(port, () => {
  console.log(`🌐 Server is alive!!!`);
});
