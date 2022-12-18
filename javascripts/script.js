
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
  let redirect_uri = 'https%3A%2F%2Flineapi-test.herokuapp.com%2F';
  // let redirect_uri = encodeURI(heroku_url);
  let state = 'anafaefn23';
  let scope = 'profile%20openid%20email';
  let nonce = '09876xyz';

  let url = `${api}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}&nonce=${nonce}`;
  document.location.href = url;
}



function btn2() {

  console.log('認証');
  
  let url = 'https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=1657742644&redirect_uri=https%3A%2F%2Flineapi-test.herokuapp.com%2F&state=anafaefn23&scope=profile%20openid%20email&nonce=09876xyz';
  // document.location.href = url;
  /*
  axios.post(`${heroku_url}auth`)
    .then(response => {
      console.log(JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    })
  */

}