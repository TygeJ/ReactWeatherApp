var axios = require('axios'); // axios = promises, making http req

// const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=80a099d3ea5cd2ed2c42c9ddc1632664&units=imperial';
// http://openweathermap.org/
// custom api
// unit specs from kelvin



module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location); //URI = Uniform resource identifier, encodes URI to URL
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; // jQuery convention

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) { // If valid location is not provided, send error, otherwise give temp
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
