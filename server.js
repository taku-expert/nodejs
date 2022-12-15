const http = require('http');
const fs = require('fs');

const HOST_NAME = '127.0.0.1';
const PORT = 3000;

const server = http.createServer((req, res) => {
  fs.readFile('./index.html','UTF-8',(error,data)=>{
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(data);
    res.end();
  })
});

server.listen(process.env.PORT || PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});