require("http").createServer((inRequest, inResponse) => {
    const requestModule = require("got");
    requestModule("http:://wordtimeapi.org/api/timezone/America/New_York",
        function(inErr, inResp, inBody){
            inResponse.end("Hello from Node Web Server: %o", inBody);
        }
    );
}).listen(80);