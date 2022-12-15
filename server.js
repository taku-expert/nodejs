const http = require('http');
const fs = require('fs');
const url = require('url');
const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const styleCss = fs.readFileSync('./style.css', 'UTF-8');
const scriptJs = fs.readFileSync('./script.js', 'UTF-8');


const HOST_NAME = '0.0.0.0';
const PORT = 3000;

const server = http.createServer(RouteSetting);

function RouteSetting(req, res) {
  const url_parts = url.parse(req.url);
  console.log(`${url_parts} -- ${url_parts.pathname}`);
  switch (url_parts.pathname) {
    case '/':
    case '/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;
  
    case '/style.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(styleCss);
      res.end();
      break;

    case '/script.js':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(scriptJs);
      res.end();
      break;

    case '/favicon.ico':
      break;

    default:
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('お探しのページは見つかりません。');
      break;
  }
}

server.listen(process.env.PORT || PORT, HOST_NAME, () => {
  console.log(`Server running at http://${HOST_NAME}:${PORT}/`);
});