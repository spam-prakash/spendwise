require('dotenv').config()
const mongoose = require('mongoose')
const mongoURI = process.env.MONGOURI

// console.log(mongoURI)

const connectToMongo = async () => {
  try {
    await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
      socketTimeoutMS: 45000
    })
    console.log('Connected to Mongoose Successfully')
  } catch (error) {
    console.error('Failed to connect to Mongoose Edited:', error)
  }
}

module.exports = connectToMongo
