const Book = require("../models/bookmodels");

exports.listBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).json(books);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updateBooks = async (req, res) => {
  const { title, author, genre } = req.body;
  try {
    const book = await Book.findOneAndUpdate(
      { title: req.body.title },
      {
        author: req.body.author,
        genre: req.body.genre,
      }
    );
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    book;
    res.status(200).json(book);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.delBook = async (req, res) => {
  const { id } = req.query;
  try {
    const book = await Book.findOneAndDelete({ title: req.body.title });
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addBook = async (req, res) => {
  try {
    const { title, author, genre, publishedYear } = req.body;
    const book = new Book({ title, author, genre, publishedYear });
    await book.save();
    res.status(201).json({ message: `Book ${title} has been added`, book });
  } catch (error) {
    res
      .status(400)
      .json({ message: `Book cannot be added`, error: error.message });
  }
};
