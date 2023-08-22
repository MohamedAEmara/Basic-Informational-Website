const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, './index.html', req.url);

    fs.readFile(filePath, (err, content) => {
        if(err) {
            if(err.code == 'ENOENT') {
                res.writeHead(404);
                res.end('File not found');
            } else {
                res.writeHead(500);
                res.end('Internal server error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content, 'utf-8');
        }
    });
});



// const server = http.createServer((req, res) => {
//     res.writeHead(302, {
//         'Location': './index.html'
//     });
//     res.end();
// });




server.listen(8080, () => {
    console.log('Sever is running on http://localhost:8080');
});
