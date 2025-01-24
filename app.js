const coffee = require('./coffee');
const firstName = require('./user').firstName;
const lastName = require('./user').lastName;
const http = require('http');
const moment = require('moment');
// console.log(firstName + " " + lastName + " membeli kopi " + coffee.name + " dengan harga " + coffee.price);
// console.log(http);

const date = moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(date);


