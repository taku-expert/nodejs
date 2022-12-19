
window.onload = async function() {

  let location_url = new URL(window.location.href);
  let params = location_url.searchParams;
  let code = params.get('code');
  let state = params.get('state');
  let error = params.get('error');
  let error_description = params.get('error_description');

  console.log(`code:${code} - state:${state}`);
  console.log(`errpr:${error} - error_description:${error_description}`);

  let data = await getAccessToken(code);
  console.log(data);
  let access_token = data.access_token;
  let id_token = data.id_token;

  let user_info = await getUserInfo(id_token);
  console.log(user_info);

  let name = user_info.name;
  let email = user_info.email;
  console.log(`name : ${name} - email : ${email}`)
}