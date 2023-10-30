const Book = require('../models/book');

exports.createBook = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    author: req.body.author,
    summary: req.body.summary,
  });

  newBook.save()
    .then((savedBook) => {
      res.status(201).json(savedBook);
    })
    .catch((error) => {
      console.error('Error saving book:', error);
      res.status(500).json({ error: 'Could not save the book' });
    });
};

exports.getAllBooks = (req, res) => {
  Book.find()
    .then((books) => {
      res.status(200).json(books);
    })
    .catch((error) => {
      console.error('Error fetching books:', error);
      res.status(500).json({ error: 'Could not fetch the list of books' });
    });
};

exports.getBookById = (req, res) => {
  const bookId = req.params.bookId;

  Book.findById(bookId)
    .then((book) => {
      if (!book) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(book);
    })
    .catch((error) => {
      console.error('Error fetching book by ID:', error);
      res.status(500).json({ error: 'Could not fetch the book' });
    });
};

exports.updateBook = (req, res) => {
  const bookId = req.params.bookId;

  Book.findByIdAndUpdate(
    bookId,
    {
      title: req.body.title,
      author: req.body.author,
      summary: req.body.summary,
    },
    { new: true }
  )
    .then((updatedBook) => {
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(200).json(updatedBook);
    })
    .catch((error) => {
      console.error('Error updating book:', error);
      res.status(500).json({ error: 'Could not update the book' });
    });
};

exports.deleteBook = (req, res) => {
  const bookId = req.params.bookId;

  Book.findByIdAndRemove(bookId)
    .then((deletedBook) => {
      if (!deletedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.status(204).end();
    })
    .catch((error) => {
      console.error('Error deleting book:', error);
      res.status(500).json({ error: 'Could not delete the book' });
    });
};
