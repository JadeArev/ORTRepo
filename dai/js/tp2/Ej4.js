const fs = require('fs');
const copiarArchivo = (source, output) => 
    fs.copyFile(source, output, err => {
        if (err)
            console.error(err);
        else
            console.log(`${source} fue copiado a ${output} exitosamente`);
    });

copiarArchivo("JadeArev.txt", "AriWier.txt");