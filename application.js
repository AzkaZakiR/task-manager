const express = require('express');
const app = express();
const tasks = require('./routes/task')
const connectDB = require('./db/connect')
require('dotenv').config() 

// middleware for routes
app.use(express.static('./public'))
app.use(express.json())

// routes

app.use('/api/v1/tasks', tasks)

const port = 3000

const start = async () => {
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Server listening on port ${port}...`));
    } catch(err){
        console.log(err)
    }
}

start()

