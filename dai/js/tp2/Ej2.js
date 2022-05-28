const multiplicar= require("./modules/matematica");
const sumar= require("./modules/matematica");
const restar= require("./modules/matematica");
const dividir= require("./modules/matematica");
const CalPi = require("./modules/matematica");

console.log(`El resultado de la multiplicación es: ${multiplicar.Multiplicar(10,6)}`);
console.log(`El resultado de la suma es: ${sumar.Sumar(10,6)}`);
console.log(`El resultado de la multiplicación es: ${restar.Restar(10,6)}`);
console.log(`El resultado de la multiplicación es: ${dividir.Dividir(10,6)}`);
console.log(`El resultado de la multiplicación es: ${CalPi.CalPi(10)}`);