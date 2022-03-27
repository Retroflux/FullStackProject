require("http").createServer((inRequest, inResponse) => {
    inResponse.end("Hello from Node Web Server");
}).listen(80);