const http = require('http');

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the response header
  res.setHeader('Content-Type', 'text/plain');
  
  // Send a response to the client
  res.end('Hello, World!\n');
});

// Set the port and host
const port = 3000;
const host = 'localhost';

// Start the server
server.listen(port, host, () => {
  console.log(`Server is running at http://${host}:${port}`);
});
