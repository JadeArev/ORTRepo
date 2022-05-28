
var url = 
"http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo";

var parser = new URL(url);
       
console.log(`El protocolo utilizado es: ${parser.protocol}`);
console.log(`El puerto utilizado es: ${parser.port}`);
console.log(`El nombre del host es: ${parser.hostname}`);
console.log(`El pathname es: ${parser.pathname}`);
console.log(`La busqueda es: ${parser.search}`);
console.log(`Los parametros son: ${parser.searchParams}`);