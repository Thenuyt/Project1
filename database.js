const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./chatbot.db', (err) => {
    if (err) {
        console.error("Database connection failed:", err.message);
    } else {
        console.log("Connected to the SQLite database.");
    }
});

// Create table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS messages (id INTEGER PRIMARY KEY, userMessage TEXT, botResponse TEXT)`);

module.exports = db;
