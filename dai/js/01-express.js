const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());
/*
const min = 1;
const numerosCarton = 10;
let cartones = [];
let numerosSacados = [];
let ganadores = [];

app.use(express.json());

function NumeroAleatorio(max){
    return Math.floor(Math.random() * (max - 1)) + 1;
}


function crearCartones(num){
    let funciono = -1, numAleatorio, a, cantidad;
    for (let i = 0; i < num; i++) {
        let carton = {
            id: i,
            nombre: null,
            valores: [],
        }
        a = 0
        while(a < numerosCarton) {
            numAleatorio = NumeroAleatorio()
            b = 0
            while(b < i){ // Este while verifica que el numero aleatorio no este ya en el carton
                if(cartones[i].valores[b] == numAleatorio){
                    b = i + 1
                }
                b++
            }
            if(b != i+2){ // si el numero aleatorio no esta en el carton, lo agrega, en caso contrario no hace nada
                carton.valores.push(numAleatorio)
                a++
            }
        }
        cartones.push(carton)
    }
    cantidad = cartones[NumeroAleatorio(num)].valores.length // linea para verificar que la funcion funcione correctamente
    if(cantidad != numerosCarton){
        funciono = 1 // ERROR CODE 1
    }
    return funciono;
}

function iniciarJuego(num){
    if(max == -1){
        max = 99
    }
    let funciono = crearCartones(num);
    return funciono;
}
    function obtenerCarton(nombre){
        let faltaEncontrar = true, cartonRandom;
        while(faltaEncontrar){ //busca un carton al azar el cual no pertenezca a ninguna persona
            cartonRandom = NumeroAleatorio(carton.length);
            if(carton[cartonRandom].nombre == null){
                faltaEncontrar = false;
            }
        }
        cartones[cartonRandom].nombre = nombre
        return cartones[cartonRandom].valores;
    }
*/
    function NumeroAleatorio(max){
        return Math.floor(Math.random() * (max - 1)) + 1;
    }

    let cartones = []

    function crearCarton(){
        let carton = {
            nombre: null,
            valores: [],      
        }
        for (let index = 0; index < 10; index++) {
            carton.valores.push(NumeroAleatorio(10))
        
        }
        return carton;
    }

    function crearCartones(num){

        for (let index = 0; index < num; index++) {
            cartones.push(crearCarton(10))
        
        }
        return cartones;
    }


    function iniciarJuego(num){
        return crearCartones(num);
    }

    function obtenerCarton(nombre){
        for (let index = 0; index < cartones.length; index++) {
            cartones[index].nombre = nombre;
        }
        while(nombre.carton = "" ){
            carton == nombre;
        }
        return cartones;
    }

    function devolverCartones(nombre){
        if(nombre == ""){
            return cartones;
        }
        else{
            return obtenerCarton(nombre);
        }
    }
    let numerosSacados = [];

    function sacarNumero(num){
        let numeroRandom = NumeroAleatorio(10);
        numerosSacados.push(numeroRandom);
        cartones.forEach(c => {
            for (let i = 0; i > c.valores; i++) {
                if (c.valores[i] = numeroRandom){
                    c.valores[i].pop;
                }
            } 
        }}

    app.post('/numero_aleatorio', (req, res)=>{
    
        console.log(req.body.numero);
        let x = NumeroAleatorio(req.body.numero);
        res.send([x]);
        
        })
        
        
        
    app.post('/iniciar_Juego', (req, res)=>{
        
        console.log(req.body.cartones);    
        let y = iniciarJuego(req.body.cartones);    
        res.send([y]);
        
        
    })

    app.get('/obtener_Carton', (req, res)=>{
   
        console.log(req.body.nombre);    
         let s = obtenerCarton(req.body.nombre);    
         res.send(s);
       
     
    })

    app.get('/cartones', (req, res)=>{
        console.log(req.body.nombre);
        let cartonesAMostrar = devolverCartones(req.body.nombre);
        res.send(cartonesAMostrar);
    })


    app.listen(port, () => {
        console.log(`example app listening on port ${port}`);
    });
