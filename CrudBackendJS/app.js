const express = require('express');
const mongoose = require('mongoose');
const url = 'mongodb://localhost/Films'

const app = express()

mongoose.connect(url, {useNewUrlParser:true});   //this will connect
const con = mongoose.connection                // this is connection handle

con.on('open',function(){
    console.log("connected!!!!")
})

app.use(express.json()) 

const filmRouter = require('./routes/films')
app.use('/films',filmRouter)


app.listen('5000', ()=>{
    console.log("server started!!")
})