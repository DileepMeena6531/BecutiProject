const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Message = require("./models/Messages.js");

const app = express();

main().then(() => {
    console.log('Connected to MongoDB');
}).catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/myApp');
}

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(bodyParser.json());

//get route
app.get('/api/messages', async (req, res) => {

    try {
        const messages = await Message.find();
        res.status(200).send(messages);
    } catch (error) {
        console.error('Error getting messages:', error);
        res.status(500).send({ error: error.message });
    }
});

//post route
app.post("/api/messages", async (req, res) => {
    try {
        const { productName, productCarbonFootprint, referencePeriodStart, referencePeriodEnd } = req.body;

        const message = new Message({
            productName: productName,
            productCarbonFootprint: productCarbonFootprint,
            referencePeriodStart: referencePeriodStart,
            referencePeriodEnd: referencePeriodEnd
        });
        await message.save();
        res.status(201).send({ message: 'Message received', data: message });
    } catch (error) {
        console.error('Error receiving message:', error);
        res.status(400).send({ error: error.message });
    }
})

app.listen(8080, () => {
    console.log(`Server running on port 8080`);
});
