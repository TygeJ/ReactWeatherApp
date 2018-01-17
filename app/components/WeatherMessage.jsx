import React from 'react';

var WeatherMessage = ({temp, location}) => {
  return (
    <h3> The temperature is {temp}° Fahrenheit IN {location}.</h3>
  )
}

module.exports = WeatherMessage;
