const express = require('express');
const cors = require('cors'); // Step 2: Require the cors package
const { createClient } = require('@astrajs/collections'); // Step 1: Require the Astra DB client
require('dotenv').config(); // Step 1: Require dotenv package to load environment variables
const app = express();
const port = 3000; // You can change this port if needed

// app.use(cors({
  // origin: ['https://emitajuba.com.br', 'http://localhost:3000']
// })); // Step 3: Use the cors middleware

app.use(cors()); // Step 3: Use the cors middleware


async function createAstraClient() {
  const astraClient = await createClient({
    astraDatabaseId: process.env.ASTRA_DATABASE_ID,
    astraDatabaseRegion: process.env.ASTRA_DATABASE_REGION,
    applicationToken: process.env.ASTRA_APPLICATION_TOKEN,
  });

  return astraClient;
}

createAstraClient().then((astraClient) => {
  const collection = astraClient.namespace('bar').collection('restaurants');

  // GET endpoint to return the JSON data
  app.get('/data/:restaurant_name', async (req, res) => {
    try {
      const restaurantName = req.params.restaurant_name;
      const { data } = await collection.find({});
      if (data[restaurantName]) {
        res.json(data[restaurantName].menu);
      } else {
        res.status(404).json({ error: 'Restaurant not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from Astra DB' });
    }
  });

  // GET endpoint to list all restaurants
  app.get('/data/restaurants', async (req, res) => {
    try {
      const { data } = await collection.find({});
      const restaurantNames = Object.keys(data);
      res.json(restaurantNames);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch data from Astra DB' });
    }
  });

  // Start the server
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}).catch((error) => {
  console.error('Failed to create Astra DB client:', error);
});