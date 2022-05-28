const url = require("url");
const parsearURL = URL => {
    const URL_regex = /(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    if (URL.match(URL_regex))
        throw "Invalid URL";
    const urlObject = url.parse(URL, true);
    return {
        host: urlObject.host,
        pathname: urlObject.pathname,
        params: urlObject.query,
    };
}
console.log(parsearURL("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo:#"));