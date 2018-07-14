import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/Chart";

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
        const currentTemp;

        console.log(this.props.weather);

        return (
            <tr key={"city_" + name}>
                <td>{name}</td>
                <td>
                    <Chart data={farenTemps} color="red" type=' degrees' />
                </td>
                <td>
                    <Chart data={pressures} color="green" type=' HPA' />
                </td>
                <td>
                    <Chart data={humidities} color="blue" type='%' />
                </td>
            </tr>
        )
    }


    render(){
        return (
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
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        )
    }
}

const mapStateToProps = ({weather}) => {
    return { weather }
}

export default connect(mapStateToProps)(WeatherList);