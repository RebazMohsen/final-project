const books = require('../data/booksdb');

exports.getAllBooks = (req, res) => {
  res.json(books);
};

exports.getBookByISBN = (req, res) => {
  const book = books.find(b => b.isbn === req.params.isbn);
  book ? res.json(book) : res.status(404).json({ message: "Book not found" });
};

exports.getBooksByAuthor = (req, res) => {
  const filteredBooks = books.filter(b => b.author.toLowerCase() === req.params.author.toLowerCase());
  res.json(filteredBooks);
};

exports.getBooksByTitle = (req, res) => {
  const filteredBooks = books.filter(b => b.title.toLowerCase().includes(req.params.title.toLowerCase()));
  res.json(filteredBooks);
};
