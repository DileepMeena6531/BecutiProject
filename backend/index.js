const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Message=require("./models/Messages.js");

const app = express();

main().then(()=>{
    console.log('Connected to MongoDB');
}).catch(err=> console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/myApp');
}

app.use(cors({
    origin: 'http://localhost:3000'
  }));

app.use(bodyParser.json());

app.get('/api/messages', async(req,res)=>{

    const messages = await Message.find();
    res.send(messages);

});

app.post("/api/messages",async(req,res)=>{
    const { productName, productCarbonFootprint, referencePeriodStart, referencePeriodEnd } = req.body;
    const message = new Message({ productName, productCarbonFootprint, referencePeriodStart, referencePeriodEnd });
    await message.save();
    res.send({message: 'Message received', data: message});
})

app.listen(8080, () => {
  console.log(`Server running on port 8080`);
});
