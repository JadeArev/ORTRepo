const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

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

    function sacarNumero(){
        let numeroRandom = NumeroAleatorio(10);
        numerosSacados.push(numeroRandom);
        return numerosSacados;
    }
        cartones.forEach(c => {
           let numero= sacarNumero(numerosSacados);
            for (let i = 0; i > c.valores; i++) {
                if (c.valores[i] = numerosSacados){
                    c.valores[i].pop;
                }
            } 
        })

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
