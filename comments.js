// Create web server
// Create a web server that listens on port 8080 and serves the comments.json file.

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./comments.json', 'utf8', (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end('An error occurred');
      return;
    }
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(data);
  });
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
// Start the server by running node comments.js.
// Visit http://localhost:8080 in your browser to see the contents of comments.json.