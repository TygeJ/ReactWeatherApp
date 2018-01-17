import React from 'react';
import WeatherForm from './WeatherForm';
import WeatherMessage from './WeatherMessage';
import openweathermap from '../api/openweathermap';

var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function (location) {
    var that = this;

    this.setState({isLoading: true});

    openweathermap.getTemp(location).then(function (temp) {
      that.setState({
        location: location,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({isLoading: false});
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3>Fetching weather...</h3>
      } else if (temp && location) {
        return <WeatherMessage temp={temp} location={location}/>;
      }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});

module.exports = Weather;
