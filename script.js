
const heroku_url = 'https://lineapi-test.herokuapp.com/';
let target = document.getElementById('btn');
let count = 0;
target.onclick = async () => {
  
  console.log(count);
  count++
  
  axios.post(`${heroku_url}auth`)
    .then(response => {
      console.log(JSON.stringify(response));
    })
    .catch(error => {
      console.error(error);
    })
}