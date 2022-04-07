const express = require('express');
const app = express();
const port = 3000;

const process_data = () => {

    const data = [11, 9, 2, -1, 110, 99, 8];

    let impar = [];
    
    for (let i = 0; i < data.length; i++){
    
        const element = data[1];
    
        if(element%2 !==0){
    
            impar.push(element);
        }
    }
    
    const proc = impar.sort((a,b)=>a-b);

    /* el .sort ordena alfabéticamente*/
    console.log(proc[1]);

    return {

        resultado : proc[1]
    };
}

    /*let Numeros = [11,9,2,-1,110,99,8];
    let par = [];
    let impar = [];


    function MostrarNumeroPar(){

        Numeros.forEach(num => {

            if (num%2 == 0) par.push(num);
            else {
                impar.push(num)
            }
        })

        res.send(num);

        Numeros.sort((a,b)=>a-b)
        res.send(Numeros[1]);
    } 
};

*/




app.use(express.json());

app.post('/', (req, res) => {

    console.log(req.body);
    res.send(process_data(req.body));

});

app.listen(port, () => {

    console.log (`Example app listening on port ${port}`)

});
