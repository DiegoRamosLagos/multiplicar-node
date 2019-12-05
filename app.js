const argv = require('./config/yargs').argv;

const colors = require('colors/safe');

const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar.js');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        console.log('listar');
        listarTabla(argv.base, argv.limite);
        break;

    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
}


//let base = '5';

//console.log(argv.base);




//let parametro = argv[2];
//let base = parametro.split('=')[1];
