import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from "../components/Chart";

class WeatherList extends Component {
    renderWeather = cityData => {
        const name = cityData.city.name;
        const kelvinTemps = cityData.list.map(weather => weather.main.temp);
        
        return (
            <tr key={"city_" + name}>
                <td>{name}</td>
                <td>
                    <Chart data={kelvinTemps} color="blue" />
                </td>
                <td>
                    <p>Pressure Goes Here</p>
                </td>
                <td>
                    <p>Humidity Goes Here</p>
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