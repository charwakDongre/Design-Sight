const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  description: String,
  severity: { type: String, enum: ['low', 'medium', 'high'] },
  roles: [{ type: String }],
  coordinates: {
    x: Number,
    y: Number,
    width: Number,
    height: Number
  }
});

const projectSchema = new mongoose.Schema({
  name: String,
  imagePath: String,
  feedback: [feedbackSchema]
});

module.exports = mongoose.model('Project', projectSchema);
