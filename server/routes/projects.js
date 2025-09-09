const express = require('express');
const multer = require('multer');
const fs = require('fs');
const axios = require('axios');
const path = require('path');
const Project = require('../models/Project');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

// Route to upload and analyze image
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded.' });
    }

    const imagePath = req.file.path;
    const base64Image = fs.readFileSync(imagePath, 'base64');
    
    const newProject = new Project({
      name: req.file.originalname,
      imagePath: req.file.filename,
    });
    
    await newProject.save();

    const requestData = {
        contents: [{
            parts: [
                {
                    text: "Analyze this UI design for accessibility, visual hierarchy, and UI/UX issues. For each issue, provide a description, severity ('low', 'medium', 'high'), relevant roles ('Designer', 'Developer', 'Reviewer'), and a bounding box with coordinates {x, y, width, height} in pixels. Return the results as a single JSON array, based on the image:"
                },
                {
                    inlineData: {
                        mimeType: "image/jpeg",
                        data: base64Image
                    }
                }
            ]
        }]
    };

    const headers = {
        'Content-Type': 'application/json'
    };

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      requestData,
      { headers: headers }
    );

    const feedbackJsonString = response.data.candidates[0].content.parts[0].text;
    console.log('Gemini API response:', response.data);

    newProject.feedback = feedback;
    await newProject.save();

    fs.unlinkSync(imagePath);
    res.json(newProject);

  } catch (error) {
    console.error('Error during upload or analysis:', error);
    res.status(500).json({ message: 'Error processing image.' });
  }
});

router.get('/', async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
});

router.get('/:id', async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
});

module.exports = router;
