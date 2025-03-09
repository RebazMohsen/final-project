const books = require('../data/booksdb');

exports.getBookReview = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json(book.reviews) : res.status(404).json({ message: "Book not found" });
};

exports.addReview = (req, res) => {
  const book = books.find(b => b.isbn === req.body.isbn);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.reviews.push({ user: req.user.username, content: req.body.content });
  res.status(201).json({ message: "Review added successfully" });
};

exports.deleteReview = (req, res) => {
  const book = books.find(b => b.isbn === req.body.isbn);
  if (!book) return res.status(404).json({ message: "Book not found" });

  book.reviews = book.reviews.filter(r => r.user !== req.user.username);
  res.json({ message: "Review deleted successfully" });
};
