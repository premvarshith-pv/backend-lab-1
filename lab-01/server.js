const http = require("http");

const PORT = 3000;

// Create a basic HTTP server using Node.js built-in http module
const server = http.createServer((req, res) => {
    // Return HTTP status 200 and plain text response
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end("Hello");
});

// Start the HTTP server
server.listen(PORT, () => {
    console.log(`Node.js server running at http://localhost:${PORT}`);
});
