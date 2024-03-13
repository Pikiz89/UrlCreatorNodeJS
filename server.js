const http = require("http");
const port = 8080;
const fs = require("fs");
const server = http.createServer();
const urls=[]

server.on("request", (req,res)=>{
    if(req.url === "/create"){
        let generatedUrl = generateUrl();
        res.end(`${generatedUrl} is your new URL !`);
    }
})
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
function generateUrl() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let generatedUrl ="";
    for(i = 0; i<3; i++){
        let randInt = Math.floor(Math.random()*26);
        generatedUrl += alphabet[randInt];
    }
    console.log(`New URL = ${generatedUrl}`);
    return generatedUrl;
}