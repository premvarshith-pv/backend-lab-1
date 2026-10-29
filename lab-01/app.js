// Import Express.js
const express = require("express");

// Initialize Express application
const app = express();

// Define server port using environment variable or default to 3000
const PORT = process.env.PORT || 3000;


// ==========================================
// ROUTE 1: HOME
// ==========================================
app.get("/", (req, res) => {
    res.status(200).send("Welcome to my Node.js and Express Server!");
});


// ==========================================
// ROUTE 2: ABOUT
// ==========================================
app.get("/about", (req, res) => {
    const student = {
        name: "Pottipati Prem Varshith",
        section: "CSE"
    };

    res.status(200).json(student);
});


// ==========================================
// ROUTE 3: CURRENT DATE AND TIME
// ==========================================
app.get("/time", (req, res) => {
    const currentDate = new Date();

    res.status(200).json({
        date: currentDate.toLocaleDateString("en-IN", {
            timeZone: "Asia/Kolkata"
        }),
        time: currentDate.toLocaleTimeString("en-IN", {
            timeZone: "Asia/Kolkata"
        }),
        timestamp: currentDate.toISOString()
    });
});


// ==========================================
// ROUTE 4: 404 ERROR HANDLING
// ==========================================
app.use((req, res) => {
    res.status(404).send("404 - Page Not Found");
});


// ==========================================
// START EXPRESS SERVER
// ==========================================
app.listen(PORT, () => {
    console.log("=================================");
    console.log("EXPRESS SERVER STARTED");
    console.log("=================================");
    console.log(`Home: http://localhost:${PORT}/`);
    console.log(`About: http://localhost:${PORT}/about`);
    console.log(`Time: http://localhost:${PORT}/time`);
    console.log("=================================");
});
