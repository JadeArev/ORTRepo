var moneda = require('currency-codes');
const obtenerMoneda = getCountry => moneda.country(getCountry).reduce((a, b) => a.concat(b.currency), []);

console.log(obtenerMoneda("Argentina"));