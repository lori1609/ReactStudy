import React,{Component} from 'react';
import { connect } from 'react-redux';

import Chart from '../components/chart';

class WeatherList extends Component {

    renderWeather(cityData){
      const name = cityData.city.name;
      const temps = cityData.list.map(weather => weather.main.temp);
      const pressures = cityData.list.map(weather => weather.main.pressure);
      const humidities = cityData.list.map(weather => weather.main.humidity);

      return (
        <tr key={name}>
          <td>{name}</td>
          <td>
            <Chart data={temps} color="orange" />
          </td>
          <td>Î
            <Chart data={pressures} color="green" />
          </td>
          <td>Î
            <Chart data={humidities} color="red" />
          </td>
        </tr>
      );
    }

    render() {
        return (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>City</th>
                  <th>Temperature</th>
                  <th>pressure</th>
                  <th>Humidity</th>
                </tr>
              </thead>
              <tbody>
                {this.props.weather.map(this.renderWeather)}
              </tbody>
            </table>
        );
    }
}

// function mapStateToProps(state) {
//   return {weather: state.weather};
// }

function mapStateToProps({weather}) {
  // return { weather: weather}
  // console.log(weather);
  return{ weather }
}


export default connect(mapStateToProps)(WeatherList);
