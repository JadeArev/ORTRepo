const express = require('express');
const app = express();
const port = 3000;

const process_data = () => {

    let Bisiestos = [];
let NoBisiestos = [];
for (Año = 2022; Año < 2150; Año++){

    if (Año % 4 == 0){

        Bisiestos.push(Año);
        console.log(Bisiestos);
    }

    else {

        NoBisiestos.push(Año);
        console.log(NoBisiestos);
        console.log("No es bisiesto");
    }


}


    return {
    };
}

 
app.use(express.json());

app.post('/', (req, res) => {

    console.log(req.body);
    res.send(process_data(req.body));

});

app.listen(port, () => {

    console.log (`Example app listening on port ${port}`)

});
