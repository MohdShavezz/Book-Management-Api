import Book from "../models/book.model.js";

export const getAllBooks = async (req, res) => {
    try {
		const books = await Book.find();
        if(!books) res.status(500).json({ error: "no books found" });
		res.status(200).json(books);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
export const createBook = async (req, res) => {
    try {
        const { title, author, publish_year } = req.body;
		
		const newBook = new Book({
            title,
            author,
            publish_year: new Date(publish_year)
          });
		const book = await newBook.save()
        if(!book) res.status(500).json({ error: "no books created" });
		res.status(200).json(book);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
export const getBook = async (req, res) => {
    try {
		const book = await Book.findById(req.params.bookId)
        if(!book) {
            res.status(404).json({ error: "not found" });
            return  
        }
		res.status(200).json(book);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
export const updateBook = async (req, res) => {
    try {
		const book = await Book.findByIdAndUpdate(req.params.bookId,req.body, { new: true })
        if(!book) res.status(500).json({ error: "not updated" });
		res.status(200).json(book);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.bookId)
        if(!book) res.status(500).json({ error: "not deleted" });
		res.status(200).json(book);
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ error: "Internal Server Error" });
	}
}