// const path = require('path');

// const fileName = 'about.html';

// const absolutePath = path.resolve(__dirname, fileName);

// console.log(absolutePath);



const express = require('express');
const app = express();
const port = 8080;

app.use(express.static('/path/to/your/project'));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});