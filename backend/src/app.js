const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use('/api/weather', require('./routes/weatherRoutes'));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

