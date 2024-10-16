const express = require('express');
const PORT = 5000;
const app = express();
const productRoutes = require('./routes');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://fast:h3gW01phrU7CjTzh@cluster0.4eb3gaz.mongodb.net/test')
    .then(() => console.log('MongoDB Connected...'))
    .catch((error) => console.error(error));

    
    app.use(express.json());

    app.use("/api/products", productRoutes)
    
    app.get('/', (req, res) => {
        res.send('Hello World');
    });
    
    
    app.use((error, req, res, next) => {
        res.status(500).json({ message: error.message })
    })
    
  
    
    module.exports = app;