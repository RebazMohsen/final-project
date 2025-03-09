const express = require('express');
const { getBookReview, addReview, deleteReview } = require('../controllers/reviewController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();
router.get('/:isbn', getBookReview);
router.post('/', authenticateToken, addReview);
router.delete('/', authenticateToken, deleteReview);

module.exports = router;
