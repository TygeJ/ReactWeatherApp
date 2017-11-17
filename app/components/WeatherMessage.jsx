var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <h3> The temperature is {temp}° Fahrenheit in {location}.</h3>
  )
}

module.exports = WeatherMessage;
