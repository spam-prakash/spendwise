const express = require('express')
const connectToMongo = require('./db')
const userdb = require('./models/User')
connectToMongo()
const cors=require('cors')
const jwt=require('jsonwebtoken')


const PORT = 8000
const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


const corsOptions = {
  // origin: allowedOrigins, // Your frontend URL
  origin: '*', // Your frontend URL
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'auth-token', 'Access-Control-Allow-Origin'],
  credentials: true // If cookies or credentials need to be sent
}
app.use(cors(corsOptions))






app.use('/api/auth', require('./api/auth'))



app.get('/', (req, res) => {
  res.send('Backend Route for SpendWise')
})

app.listen(PORT, () => {
  console.log(`Server is running on  http://localhost:${PORT}`)
})
