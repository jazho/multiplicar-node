const fs = require('fs');
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('============================'.green);
    console.log(`Tabla de ${ base }`.green);
    console.log('============================'.green);
    let data = "";


    for (let i = 1; i <= limite; i++) {

        data += `${base} * ${i} =  ${base*i}\n`;


    }

    console.log(data);






}



let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {
        let data = "";

        if (!Number(base)) {
            reject(`El valor introducido ${ base } no es un numero`);
            return;
        }


        for (let i = 1; i <= limite; i++) {

            data += `${base} * ${i} =  ${base*i}\n`;


        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}.txt`)
            console.log(`El archivo tabla-${base}.txt ha sido creado`.red);
        });

    });


}

module.exports = {
    crearArchivo,
    listarTabla
};