const express = require('express');
const cors = require('cors'); // Step 2: Require the cors package
const { createClient } = require('@astrajs/collections'); // Step 1: Require the Astra DB client
require('dotenv').config(); // Step 1: Require dotenv package to load environment variables
const app = express();
const port = 3000; // You can change this port if needed

app.use(cors()); // Step 3: Use the cors middleware

const astraClient = await createClient({
  astraDatabaseId: process.env.ASTRA_DATABASE_ID,
  astraDatabaseRegion: process.env.ASTRA_DATABASE_REGION,
  applicationToken: process.env.ASTRA_APPLICATION_TOKEN,
});

const collection = astraClient.namespace('bar').collection('restaurant_menu');

// GET endpoint to return the JSON data
app.get('/data', async (req, res) => {
  try {
    const data = await collection.find({});
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data from Astra DB' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});