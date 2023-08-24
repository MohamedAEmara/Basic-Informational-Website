const http = require('http');
const fs = require('fs');
const path = require('path');


const server = http.createServer((req, res) => {
    if(req.url === '/' || req.url === '/index') {
        // serve the index.html
        let filePath = path.join(__dirname, 'index.html');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Sever Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });      
    } else if(req.url === '/about') {
        let filePath = path.join(__dirname, 'about.html');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Sever Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } else if(req.url === '/contact-me') {
        let filePath = path.join(__dirname, 'contact-me.html');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if(err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Internal Sever Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    } 
    else {
        let filePath = path.join(__dirname, '404.html');
        fs.readFile(filePath, 'utf-8', (err, content) => {
            if(err) {
                res.writeHead(500, { 'Content-type': 'test/plain' });
                res.end('Internal Sever Error');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        })
    //    res.writeHead(200, { 'Content-Type': 'text/plain' });
    //    res.end('404 Not Found');
    }
});


const port = 8080;
server.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});

// server.listen(`${port}/aout`, () => {
//     console.log('Sever is running at localhost:8080/about');
// })