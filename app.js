const {crearArchivo, listarTablaConsola} = require("./multiplicar/multiplicar");
const argv = require('./config/yargs').argv;
var colors = require('colors');
// el objeto module es globar para node js y nos muestra muchas caracteristicas
//de nuestros archivos js.



//Recibir informacion desde la linea de comandos.



// por defecto siempre se envian dos parametros a argv, la direccion de node y
//la direccion del archivo que estamos ejecutando.

//console.log(process.argv);
//let argv2 = process.argv;

// base = process.argv[2]
// base = base.split('=')[1]

let command = argv._[0];
let base = argv.base;
let limite = argv.limite;

//console.log(argv2);
switch (command) {
  
  case 'listar':
    listarTablaConsola(base, limite)
      .then(tabla => console.log(`La tabla creada es:\n${tabla}`.blue))
        .catch(e => console.log(e.red));
    
    break;

  case 'crear':
      crearArchivo(base, limite)
      .then(archivo => console.log(`Archivo creado: ${archivo}`.green))
        .catch(e => console.log(e.red));
    break;

  default:
   console.log(`No existe el comando ${command}!`)
    break;
}



// module es un objeto de Node que nos permite exportar archivos o funciones
//console.log(module);

//process es otro objeto de node que nos da muchisima informacion sobre nuestro sistema.
//console.log(process)

