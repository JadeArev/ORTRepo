var moneda = require('currency-codes');
const obtenerMoneda = pais => moneda.country(pais).reduce((a, b) => a.concat(b.currency), []);

console.log(obtenerMoneda("argentina"));