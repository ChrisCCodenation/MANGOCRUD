const Book = require("../db/models/bookmodels");

const connectDB = require("../db/connection");
const bookRoutes = require("../db/routes/bookroutes");
require("dotenv").config();

const express = require("express");
const app = express();

app.use(express.json());

app.use(bookRoutes)

app.post("/addbook", async (req, res) => {
  try {
    const results = await Book.create({
      title: req.body.title,
      author: req.body.author,
      genre: req.body.genre,
    });
    const responseMessage = {
      message: `Book ${req.body.title} has been added`,
      dbresponse: results,
    };
    res.status(201).send(responseMessage);
  } catch (error) {
    console.log(error);
    const responseMessage = {
      message: `Book ${req.body.title} has NOT been added`,
      dbresponse: error,
    };
    res.status(400).send(responseMessage);
  }
});

app.listen(5001, () => console.log("Server is listening on port 5001"));
