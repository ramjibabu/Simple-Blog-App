const bodyParser = require('body-parser');
const express=require('express');
const app=express();
const mongoose=require('mongoose')
const postRoute=require('./routes/postRoute')
const cors=require('cors')
const port=8000;

app.use(cors())
app.use(bodyParser.json())
app.listen(port,()=>{
    console.log("app listening port at "+port)
})

mongoose.connect('mongodb://localhost/blog')
.then(() => {
    console.log('Connected to MongoDB');
})
.catch((error) => {
    console.error('Error connecting to MongoDB:', error);
});

app.use('/api/v1/post',postRoute)
