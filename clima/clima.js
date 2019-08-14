const axios = require('axios');

const getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=26fe2356047ff9a8efc85ca04f9118d0&units=metric`);

    return resp;
}


module.exports = {
    getClima
}