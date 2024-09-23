const express = require('express') //import express
const morgan = require('morgan') //import morgan
const mongoose = require('mongoose') //import mongoose
require('dotenv').config() //import .env for secure URI storage
const app = express() //use express
const cors = require('cors'); //to fix CORS error

app.use(express.json()) //converts requests to JSON
app.use(morgan('dev')) //logs request statuses
app.use("/", require('./routes/churchRouter')) //creates endpoint for church list

// // Use CORS to allow requests from localhost:5173
// app.use(cors());  // Enable CORS for all routes

// app.get('/list', (req, res) => {
//   res.json({ message: 'CORS issue fixed!' });
// });
// /* End of CORS Template */

/** CONNECTING TO THE DATABASE **/
const connectToDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
}
/** End of Function **/

connectToDB() //Starts connection to DB

/** Starts Express Server **/
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port 8500.")
})
/** End of Function **/

/** Template for Returning Errors **/
app.use((error, req, res, next) => {
    return res.send({errMsg: error.message})
})
/**  End of Template **/
