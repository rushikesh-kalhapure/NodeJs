const http = require('http');
const fs = require('fs');
const userForm = require('./userForm');
const formSubmit = require('./formSubmit');


http.createServer((req, res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if (req.url == '/') {
        userForm(req, res);
        res.end();
    } else if (req.url == '/submit') {
        formSubmit(req, res);
        // formSubmit calls res.end() itself when body is received
    }
}).listen(3000,()=>console.log('Server is running on port 3000'))