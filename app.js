const express = require('express');
const mongoose = require('mongoose');

const booksRoutes = require('./routes/books');

const app = express();

app.use(express.json());

mongoose
	.connect('mongodb+srv://katorligan:4pQjcENGqINE0qWu@cluster0.grinbdt.mongodb.net/?retryWrites=true&w=majority', {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => console.log('Connected to MongoDB.'))
	.catch(() => console.log('Connection to MongoDB failed.'));

app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

app.use('/api/books', booksRoutes);

module.exports = app;
