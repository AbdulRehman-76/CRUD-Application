const mongoose = require('mongoose');
const dotenv = require('dotenv');

//to load env configuration
dotenv.config();

const connectDB = async () => {
  try {
    //console.log("Mongo URI:", process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI);
    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

module.exports = connectDB;