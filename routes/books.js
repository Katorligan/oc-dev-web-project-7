const express = require('express');
const router = express.Router();
const booksController = require('../controllers/books');

router.post('/', booksController.createBook);
router.put('/:id', booksController.updateBook);
router.delete('/:id', booksController.deleteBook);
router.get('/:id', booksController.getBook);
router.get('/', booksController.getAllBooks);

module.exports = router;
