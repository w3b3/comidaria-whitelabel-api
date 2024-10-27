const express = require('express');
const cors = require('cors'); // Step 2: Require the cors package
const app = express();
const port = 3000; // You can change this port if needed

app.use(cors()); // Step 3: Use the cors middleware

// Your JSON data
const myData = [
    {
        name: 'Burger',
        description: 'A delicious beef burger',
        price: 8.99,
        image: 'exported_images/burger.jpg',
        category: ['Main', 'Lunch']
    },
    {
        name: 'Pizza',
        description: 'A cheesy pizza with toppings',
        price: 12.99,
        image: 'exported_images/pizza.jpg',
        category: ['Main', 'Dinner']
    },
    {
        name: 'Salad',
        description: 'A healthy green salad',
        price: 6.99,
        image: 'exported_images/salad.jpg',
        category: ['Starter', 'Lunch']
    },
    {
        name: 'Ice Cream',
        description: 'A sweet treat',
        price: 2.99,
        image: 'exported_images/ice_cream.jpg',
        category: ['Dessert']
    },
    {
        name: 'Coffee',
        description: 'A hot cup of coffee',
        price: 1.99,
        image: 'exported_images/soda.jpg',
        category: ['Drinks']
    },
    {
        name: 'Fresh Juice',
        description: 'A refreshing cup of tea',
        price: 1.49,
        image: 'exported_images/juices.jpg',
        category: ['Drinks']
    },
    {
        name: 'Pasta',
        description: 'A classic pasta dish',
        price: 9.99,
        image: 'exported_images/Gemini_Generated_Image_95hklh95hklh95hk.jpg',
        category: ['Main', 'Dinner']
    },
    {
        name: 'Soup',
        description: 'A hearty bowl of soup',
        price: 4.99,
        image: 'exported_images/Gemini_Generated_Image_95hklh95hklh95hk.jpg',
        category: ['Starter', 'Lunch']
    },
    {
        name: 'Cake',
        description: 'A slice of cake',
        price: 3.99,
        image: 'exported_images/Gemini_Generated_Image_95hklh95hklh95hk.jpg',
        category: ['Dessert']
    },
    {
        name: 'Beer',
        description: 'A cold beer',
        price: 3.49,
        image: 'exported_images/Gemini_Generated_Image_95hklh95hklh95hk.jpg',
        category: ['Drinks']
    },
];

// GET endpoint to return the JSON data
app.get('/data', (req, res) => {
  res.json(myData);
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});