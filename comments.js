// Create web server
// Run: node comments.js
// 1. Import http module
var http = require('http');
// 2. Create server
var server = http.createServer(function(req, res) {
    // 3. Set header
    res.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    // 4. Set body
    res.end('Hello, this is my first Node.js web server');
});
// 5. Listen port
server.listen(3000, '