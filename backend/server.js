import express, { urlencoded } from 'express'
import dotenv from 'dotenv'

import authRoutes from "./routes/auth.routes.js";
import bookRoutes from "./routes/book.routes.js";
import connectToMongoDB from "./db/connectToMongoDB.js";
const app = express()
const PORT = process.env.PORT || 5000;
dotenv.config()

app.use(express.json())


app.use("/api/auth", authRoutes);
app.use("/api/book", bookRoutes);



app.get('/',(req,res)=>{
    res.send("hello check")
})



app.listen(PORT,()=>{
    connectToMongoDB();
    console.log('server is running at ',PORT)
})