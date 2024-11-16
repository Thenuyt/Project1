const express = require('express');
const app = express();
const chatbotRoutes = require('./routes/chatbotRoutes');
const PORT = 3000;

// Middleware
app.use(express.json()); // Parse JSON bodies

// Routes
app.use('/api', chatbotRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
