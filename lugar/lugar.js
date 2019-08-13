const axios = require('axios');

const getLugarLatLong = async(dir) => {

    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {
            "x-rapidapi-host": "devru-latitude-longitude-find-v1.p.rapidapi.com",
            "x-rapidapi-key": "27131239eamshd706e43ca9bf23dp1d898bjsnb3b707436159"
        }
    });


    const response = await instance.get();

    if (response.data.Results.length === 0) {
        throw new Error("No hay resultados para " + dir);
    }

    const data = response.data.Results[0];

    return {
        direccion: data.name,
        lat: data.lat,
        lon: data.lon,
    }
}


module.exports = {
    getLugarLatLong
}