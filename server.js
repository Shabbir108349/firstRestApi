const express = require('express')
const mongoose = require('mongoose')
const router = require('./Router/route')
const body = require('body-parser')


const PORT = process.env.PORT  || 45203
const app = express()
app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
})

mongoose.connect("mongodb://localhost:27017/Mother")
const db = mongoose.connection

db.once('open',()=>{
    console.log('Connection has been established')
})

db.on('connection',(error)=>{
    console.log(error)
})

app.use(body.urlencoded({extended:true}))
app.use(body.json())


app.use('/',router)


