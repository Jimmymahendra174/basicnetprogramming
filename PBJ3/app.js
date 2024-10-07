const request = require('postman-request')
const url =
'http://api.weatherstack.com/current?access_key=6c9eb9333939f57297384199c6fbdecd&query=-0.8999152834973572, 100.42988613551928'
request({ url: url }, (error, response) => {
  //console.log(response)
 const data = JSON.parse(response.body)
//console.log(data)
// console.log(data.current)
console.log(data.current.temperature)
 })