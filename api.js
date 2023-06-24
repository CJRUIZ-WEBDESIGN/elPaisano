let formdata = new FormData();
formdata.append("user", "hsimpson");
formdata.append("password", "123456");
formdata.append("mode", "api");

let requestOptions = {
  method: 'POST',
  body: formdata,
  redirect: 'follow'
};

fetch("https://api.nb.com.ar/v1/auth/login", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));