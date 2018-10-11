import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/Chart";
import GoogleMaps from '../components/GoogleMaps';

const styles = {
    defaultMessageStyles: {
        textAlign: 'center',
    }
}

class WeatherList extends Component {
    renderWeather = cityData => {
        const name = cityData.city.name;
        const kelvinTemps = cityData.list.map(weather => weather.main.temp);
        const farenTemps = kelvinTemps.map(k => {
            let farenheight = 1.8 * (k - 273) + 32;
            return farenheight;
        })
        const pressures = cityData.list.map(weather => weather.main.pressure);
        const humidities = cityData.list.map(weather => weather.main.humidity);
        const { lat, lon } = cityData.city.coord;

        return (
            <tr key={"city_" + name}>
                <td><GoogleMaps lat={lat} lon={lon} />{cityData.city.name}</td>
                <td>
                    <Chart data={farenTemps} color="red" type=' degrees' />
                </td>
                <td>
                    <Chart data={pressures} color="green" type=' hPa' />
                </td>
                <td>
                    <Chart data={humidities} color="blue" type='%' />
                </td>
            </tr>
        )
    }


    render(){
        console.log(this.props);
        return (
            <div>
            <table className='table table-hover'>
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather[0] ? 
                    this.props.weather.map(this.renderWeather)
                    : <Fragment />
                }
                </tbody>
            </table>
            {!this.props.weather[0] ? 
                <div style={styles.defaultMessageStyles}>
                    <h3>Enter a city name to get started</h3>
                </div> : <Fragment />    
            }
            </div>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);