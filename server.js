const http = require('http');
const fs = require('fs');
const url = require('url');
const axios = require('axios');
const indexPage = fs.readFileSync('./index.html', 'UTF-8');
const styleCss = fs.readFileSync('./style.css', 'UTF-8');
const scriptJs = fs.readFileSync('./script.js', 'UTF-8');

const callback_url = 'https://lineapi-test.herokuapp.com/';
const response_type = 'code';
const client_id = '1657742644';
const redirect_uri = encodeURI(callback_url);
const state = 'anafaefn23';
const scope = 'profile%20openid%20email';
const nonce = '09876xyz';
const bot_prompt = 'aggressive';


const HOST_NAME = '0.0.0.0';
const PORT = 3000;

const server = http.createServer(RouteSetting);

async function RouteSetting(req, res) {
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

    case '/auth':
      console.log('sss');
      await getToken();
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


async function getToken() {

  let url = 'https://access.line.me/oauth2/v2.1/';
  
  let header = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
  }};
  
  let param = {
    authorize: {
      response_type: response_type,
      client_id: client_id,
      redirect_uri: redirect_uri,
      state: state,
      scope: scope,
      nonce: nonce,
      bot_prompt: bot_prompt
    }};
   let url2 = `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}&nonce=${nonce}`;

    
  let response = await axios.get(url2).catch(
    async err => {
      console.log(err);
    });
      
  console.log(response);
  return response;
}