const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const booksRoutes = require('./routes/books');
const usersRoutes = require('./routes/users');
require('dotenv').config();

const app = express();

app.use(express.json());

mongoose
	.connect(process.env.MONGODB_SERV_PASSWORD, {
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
app.use('/api/auth', usersRoutes);
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
