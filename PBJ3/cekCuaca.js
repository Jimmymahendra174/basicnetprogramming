const request = require('postman-request')
const urlCuaca =
'http://api.weatherstack.com/current?access_key=6c9eb9333939f57297384199c6fbdecd&query=-0.8999152834973572, 100.42988613551928=m'
request({ url: urlCuaca, json: true }, (error, response) => {
console.log('Saat ini suhu diluar mencapai ' +
response.body.current.temperature +
' derajat celcius. Kemungkinan terjadinya hujan adalah' + response.body.current.precip
+ '%')
})