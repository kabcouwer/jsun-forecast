const express = require("express");
const app = express();
const port = 3000;
const indexRoutes = require("./app/routes/indexRoutes");
const weatherRoutes = require("./app/routes/weatherRoutes");

// Set the views directory
app.set("views", "./app/views");

// Set the view engine to ejs
app.set("view engine", "ejs");

// Serve the public folder as static files
app.use(express.static("public"));

// Hangle the index route
app.use('/', indexRoutes);

// Handle the weather route
app.use('/weather', weatherRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
