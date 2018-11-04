
const fs = require('fs');


let crearArchivo =  (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base enviada "${base}" No es un numero`);
            return;
        }
        var data = '';
        var fileName = `./tablas/tabla-${base}.txt`

        for (let i = 1 ; i <= limite; i++){
            data += `${i} * ${base} = ${i*base}\n`;
        }

        fs.writeFile(fileName, data, (err) => {
            if (err) reject( err);
            resolve(`The ${fileName} has been saved!`);
              })
        });

    }

let listarTablaConsola =  (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`La base enviada "${base}" No es un numero`);
            return;
        }
        var data = '';
       
        for (let i = 1 ; i <= limite; i++){
            data += `${i} * ${base} = ${i*base}\n`;
        }
        resolve(data);
    });

}

module.exports = {
        crearArchivo,
        listarTablaConsola
    }

    