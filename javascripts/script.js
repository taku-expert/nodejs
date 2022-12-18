
const heroku_url = 'https://lineapi-test.herokuapp.com/';
let target1 = document.getElementById('btn1');
let target2 = document.getElementById('btn2');
let count = 0;

function btn1() {
  
  console.log(count);
  count++

  let api = 'https://access.line.me/oauth2/v2.1/authorize';
  let response_type = 'code';
  let client_id = '1657742644';
  let redirect_uri = encodeURI(`${heroku_url}redirect`);
  let state = 'anafaefn23';
  let scope = 'profile%20openid%20email';
  let nonce = '09876xyz';

  let url = `${api}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}&nonce=${nonce}`;
  document.location.href = url;
}



function btn2() {

  console.log('認証');

  let location_url = new URL(window.location.href);
  let params = location_url.searchParams;
  let code = params.get('code');
  let state = params.get('state');
  let error = params.get('error');
  let error_description = params.get('error_description');

  console.log(`code:${code} - state:${state}`);
  console.log(`errpr:${error} - error_description:${error_description}`);

  

}

