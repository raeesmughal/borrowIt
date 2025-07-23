const express = require('express');
const app = express();
const dotenv = require('dotenv').config();
const MONGODB_URI = process.env.MONGODB_URI;
const mongoose = require('mongoose');

// middleware
app.use(express.json());




// Importing Mongoose models (schemas) for Student, Book, and Borrow

const Student = require('./models/Student');
const Book = require('./models/Book');
const Borrow = require('./models/Borrow');




// ============== connecting mongodb ===============

mongoose.connect(MONGODB_URI)
    .then(() => console.log('mongodb connected'))
    .catch((er) => console.error(er));





// ============= DEFINE ROUTES ===========



// Add Student
app.post('/student', async (req, res) => {
    try {
        const student = new Student(req.body);
        await student.save();

        res.status(200).json({
            success: true,
            student: student,
        })

    }catch(er){
        res.status(400).json({
            success: false,
            error: er.message,
        })
    }
})



// Add Book
app.post('/book', async (req,res)=>{
    try{
        const book = new Book(req.body);
        await book.save();
        res.status(200).json({
            success: true,
            book: book
        })
    }catch(er){
        res.status(400).json({
            success: false,
            error: er.message,
        })
    }
})

// borrow book
app.post('/borrow', async (req,res)=>{
    try{
        const borrow = new Borrow(req.body) // expects : {student : id, book : id}
        await borrow.save();
        res.status(200).json({
            success: true,
            borrow: borrow,
        })

    }catch(er){
        res.status(400).json({
            success: false,
            error: er.message,
        })
    }
})


// See borrowed books with full student & book data
app.get('/borrow', async (req,res)=>{
    const borrow = await Borrow.find().populate('student').populate('book');

    // popuate : 
    // Replace the student field in the output with the full student document from the students collection (using the given student id) populate('student').
    // Same for .populate('book').

    res.json(borrow)
})





const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running on : http://localhost:${PORT}`)
})