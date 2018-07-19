import React, { Component } from 'react';

class GoogleMaps extends Component {
    constructor(props){
        super(props);

        // this.state = {
        //     mapState: {
        //         center: {
        //             lat: this.props.lat,
        //             lon: this.props.lon,
        //         },
        //         zoom: 12,
        //     }
        // }
    }

    componentDidMount() {
        console.log(`Lat: ${typeof this.props.lat}`);
        console.log(`Lon: ${typeof this.props.lon}`);
        let lat = parseFloat(this.props.lat);
        let lon = parseFloat(this.props.lon);

        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat: lat,
                lng: lon,
            }
        })
    }

    render(){
        return <div ref='map' />
    }
}

export default GoogleMaps;