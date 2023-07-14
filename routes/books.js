const express = require('express');
const booksController = require('../controllers/books');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config');

const router = express.Router();

router.post('/', auth, multer, booksController.createBook);
router.put('/:id', auth, booksController.updateBook);
router.delete('/:id', auth, booksController.deleteBook);
router.get('/:id', booksController.getBook);
router.get('/', booksController.getAllBooks);

module.exports = router;
