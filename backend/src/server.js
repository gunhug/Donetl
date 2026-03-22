import express from 'express'
import tasksRoutes from './routes/tasksRoutes.js'
import {connectDB} from './config/db.js'
import dotenv from 'dotenv'
dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000;

connectDB()

app.use('/api/tasks', tasksRoutes)

app.listen(PORT, () => {
  console.log(`server bắt đầu trên cổng ${PORT}`)
})

