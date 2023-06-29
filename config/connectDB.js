const mongoose = require("mongoose");

// Database connection function
const connectDb = async()=>{
    try {
        mongoose.connect(process.env.MONGO_CLOUD);
        console.log("mongodb connected successfully");
    } catch (error) {
        console.log("There is some error in database connection")
    }
}

module.exports = connectDb;