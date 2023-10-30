const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  summary: String,
});

// Create a model using the schema
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
