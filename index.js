const express = require('express');
const path = require('path');
const app = express();
const port = 3000;
const weatherRoutes = require('./src/routes/weatherRoutes');

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use weather routes
app.use('/weather', weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
