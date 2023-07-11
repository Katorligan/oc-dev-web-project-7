const express = require('express');
const router = express.Router();

router.post('/', (req, res, next) => {
	console.log(req.body);
	res.status(201).json({ message: 'Object created.' });
});

router.get('/', (req, res, next) => {
	const books = [
		{
			userId: 'katorligan',
			title: 'Ellana',
			author: 'Pierre Bottero',
			imageUrl: 'https://m.media-amazon.com/images/I/91thWMMCVRL._AC_UF1000,1000_QL80_.jpg',
			year: 2006,
			genre: 'Fantasy, Aventure',
			ratings: [
				{
					userId: 'katorligan',
					grade: 5,
				},
			],
			averageRating: 5,
		},
		{
			userId: 'katorligan',
			title: "Ellana l'envol",
			author: 'Pierre Bottero',
			imageUrl: 'https://cdn1.booknode.com/book_cover/7/le_pacte_des_marchombres_tome_2_ellana_lenvol-6778-264-432.jpg',
			year: 2008,
			genre: 'Fantasy, Aventure',
			ratings: [
				{
					userId: 'katorligan',
					grade: 5,
				},
			],
			averageRating: 5,
		},
		{
			userId: 'katorligan',
			title: 'Ellana la prophétie',
			author: 'Pierre Bottero',
			imageUrl: 'https://www.babelio.com/couv/CVT_Le-Pacte-des-MarchOmbres-Tome-3--Ellana--La-prop_5372.jpg',
			year: 2008,
			genre: 'Fantasy, Aventure',
			ratings: [
				{
					userId: 'katorligan',
					grade: 5,
				},
			],
			averageRating: 5,
		},
	];
	res.status(200).json(books);
});

module.exports = router;
