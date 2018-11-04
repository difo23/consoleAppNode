const opcionesCrear = {
    base: {
        demand: true,
        alias: 'b'
      }, 
      limite: {
        alias: 'l',
        default: 10
      }
   
}
const opcionesListar = opcionesCrear;

const argv = require('yargs')
            .command('crear', 'Crear archivo txt donde guarda la tabla',opcionesCrear)
            .command('listar', 'Imprime en consola la tabla de multiplicar',opcionesListar)
            .help()
            .argv;


module.exports= {
    argv
}