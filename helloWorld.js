//prints Hello World to console
console.log("Hello World");

// print 'Hello World' to new HTTP connections.
var http = require('http');

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
}).listen(8080);
//go to 'http://localhost:8080' you should see 'Hello World' message.

console.log('Server started');
