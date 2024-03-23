// Create simple server

var http = require('http');

http.createServer(function(request, response) {
    response.writeHead(200); // Status code in header
    response.write("Hello World"); // Response body
    
    setTimeout(() => {
        response.write("This is second line of response body");    
        response.end(); // Close the connection
    }, 1000);
    
    
}).listen(8080, function() {
    console.log("Listening on port 8080");
}); // Listen for connections on this port