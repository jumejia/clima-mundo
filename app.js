const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección ciudad del clima',
        demand: true
    }
}).argv;


lugar.getLugarLatLong(argv.direccion)
    .then(resp => {
        clima.getClima(resp.lat, resp.lon)
            .then(a => {
                console.log(a.data);

            }).catch(e => {
                console.error(e);
            });

    }).catch(err => {
        console.error(err);
    });