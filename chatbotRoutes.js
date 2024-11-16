const express = require('express');
const router = express.Router();
const { chatWithGPT } = require('../controllers/chatbotController'); // Ensure correct path

// Define the POST route for the chatbot
router.post('/chat', async (req, res) => {
    const userMessage = req.body.userMessage;
    try {
        // Call the chatWithGPT function and get the response
        const botResponse = await chatWithGPT(userMessage);
        res.json({ response: botResponse });
    } catch (error) {
        console.error('Error in chatbot route:', error.message);
        res.status(500).json({ response: 'Sorry, there was an error processing your request.' });
    }
});

module.exports = router;
