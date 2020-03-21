let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
let API = 'https://rickandmortyapi.com/api/character/'

function fetchData(url_api, callback) {
  let xhttp = new XMLHttpRequest();
  // xhttp.open('Metodo de peticion', uri de la peticion , asincronismo (boolean ))
  xhttp.open("GET", url_api, true);
  // estados:
  // 0: inicializado
  // 1: procesos
  // 2: cargado
  // 3: descarga
  // 4: completado
  xhttp.onreadystatechange = function(event) {
    if (xhttp.readyState === 4) {
      if (xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        const error = new Error('Error '.concat(url_api))
        return(error, null)
      }
    }
  }
  xhttp.send()
}

fetchData(API, function(error1, data1){
  if(error1) return console.error(error1)
  fetchData(API + data1.results[0].id, function(error2, data2){
    if(error2) return console.error(error2);
    fetchData(data2.origin.url, function (error3, data3){
      if(error3) return console.log(error3);
      console.log(data1.info.count);
      console.log(data2.name);
      console.log(data3.dimension);
    })
  })
})
