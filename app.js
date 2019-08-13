const lugar = require('./lugar/lugar');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección ciudad del clima',
        demand: true
    }
}).argv;


lugar.getLugarLatLong(argv.direccion)
    .then(resp => {
        console.log(resp);
    }).catch(err => {
        console.error(err);
    });