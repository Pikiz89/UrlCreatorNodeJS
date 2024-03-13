const http = require("http");
const port = 8080;
const fs = require("fs");
const server = http.createServer();

server.on("request", (req,res)=>{
    res.end("hello, world !")
})
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})