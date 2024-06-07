const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  productCarbonFootprint: {
    type: String,
    required: true
  },
  referencePeriodStart: {
    type: Date,
    required: true
  },
  referencePeriodEnd: {
    type: Date,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Message', messageSchema);
