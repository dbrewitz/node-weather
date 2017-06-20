// index.js
const argv = require('yargs').argv;

let apiKey = '29056d395a05c9dd22c2fc7fa7e47993';
// let city = 'minneapolis';
let units = 'imperial'
let city = argv.c || 'minneapolis';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

const request = require('request');
request(url, function (err, response, body) {
    if (err) {
        console.log('error:', error);
    } else {
       // console.log('body:', body);
        let weather = JSON.parse(body)
        let message = `It's ${weather.main.temp} outside right now in ${weather.name}!`
        console.log(message)
    }
});