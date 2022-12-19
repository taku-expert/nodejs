
const http = require('http');
const fs = require('fs');
const url = require('url');
const axios = require('axios');
const indexPage = fs.readFileSync('./html/index.html', 'UTF-8');
const redirectPage = fs.readFileSync('./html/redirect.html', 'UTF-8');
const styleCss = fs.readFileSync('./css/style.css', 'UTF-8');
const scriptJs = fs.readFileSync('./javascripts/script.js', 'UTF-8');
const faviconImg = fs.readFileSync('./images/favicon.png', 'UTF-8');

const HOST_NAME = '0.0.0.0';
const PORT = 3000;

const server = http.createServer(RouteSetting);

async function RouteSetting(req, res) {
  const url_parts = url.parse(req.url);
  console.log(`${url_parts} -- ${url_parts.pathname}`);
  switch (url_parts.pathname) {
    case '/':
    case '/html/index.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(indexPage);
      res.end();
      break;

    case '/redirect':
    case '/html/redirect.html':
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(redirectPage);
      res.end();
      break;

    case '/css/style.css':
      res.writeHead(200, {'Content-Type': 'text/css'});
      res.write(styleCss);
      res.end();
      break;

    case '/javascripts/script.js':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.write(scriptJs);
      res.end();
      break;

    case '/images/favicon.png':
      res.writeHead(200, {'Content-Type': 'image/png'});
      res.write(faviconImg);
      res.end();
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
