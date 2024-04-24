import express from "express";
import { getAllBooks, createBook, getBook, updateBook, deleteBook,getBooksByAuthorName } from "../controllers/book.controller.js";

const router = express.Router();

router.get("/books", getAllBooks)
      .get('/:bookId', getBook)
      .put('/:bookId', updateBook)
      .delete('/:bookId', deleteBook)
router.post("/create", createBook);
router.get('/author/:authorName', getBooksByAuthorName)

export default router;
