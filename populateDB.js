
const { createClient } = require('@astrajs/collections');
require('dotenv').config();

const restaurant_menu = [
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

const restaurants = [
    {
        name: 'McDonalds',
        location: 'USA',
        rating: 4.5,
        image: 'exported_images/mcdonalds.jpg',
        menu: restaurant_menu
    },
];

async function populateDB() {
    const astraClient = await createClient({
        astraDatabaseId: process.env.ASTRA_DATABASE_ID,
        astraDatabaseRegion: process.env.ASTRA_DATABASE_REGION,
        applicationToken: process.env.ASTRA_APPLICATION_TOKEN,
    });

    const collection = astraClient.namespace('bar').collection('restaurants');

    for (const item of restaurants) {
        await collection.create(item.name, item);
    }

    console.log('Data successfully inserted into Astra DB');
}

populateDB().catch(console.error);