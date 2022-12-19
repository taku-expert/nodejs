
window.onload = async function() {

  let api = 'https://access.line.me/oauth2/v2.1/authorize';
  let response_type = 'code';
  let scope = 'profile%20openid%20email';
  let nonce = '09876xyz';

  let url = `${api}?response_type=${response_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&state=${state}&scope=${scope}&nonce=${nonce}`;
  document.location.href = url;
}