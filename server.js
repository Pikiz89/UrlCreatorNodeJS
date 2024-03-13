const http = require("http");
const port = 8080;
const fs = require("fs");
const server = http.createServer();
const urls=[]
const NUMBEROFCHAR = 4;

server.on("request", (req,res)=>{
    if(req.url === "/create"){
        let generatedUrl = generateUrl();
        res.end(`<body>${generatedUrl} is your new URL !<a href="/url/${generatedUrl}">check it out!</a></body>`);
    }else if(req.url === "/cmap"){
        let generatedUrl = generateUrlMAP();
        res.end(`${generatedUrl} is your new URL (MAP) !`);
    }
    else if (req.url.startsWith('/url/')){
        let url = req.url.split('/')[2];
        console.log(url);
        if (url.length != NUMBEROFCHAR){
            res.end('invalid url');
            return;
        }
        for(i=0; i<urls.length; i++){
            if (url === urls[i]){
                res.end('<body><h4>this url exist !</h4><a href="/create">Create a new one !</a></body>');
                return;
            }
        }
        res.end('<body><h4>this url doesn\'t exist !</h4><a href="/create">Create a new one !</a></body>');
    }else{
        res.end('<body><h4>Hello, World!</h4><a href="/create">Create a unique url !</a>');
    }
})
server.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})
function generateUrl() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let generatedUrl ="";
    for(i = 0; i<NUMBEROFCHAR; i++){
        let randInt = Math.floor(Math.random()*26);
        generatedUrl += alphabet[randInt];
    }
    if (generatedUrl in urls){
        return generateUrl();
    }else{
        console.log(`New URL = ${generatedUrl}`);
        urls.push(generatedUrl);
    }
    return generatedUrl;
}
