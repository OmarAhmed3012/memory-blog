import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import connectDB from './config/db.js'
import config from 'config'

const app = express()

connectDB()

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

app.use(cors())

const port = config.get('port')
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`)
})
