import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

const styles = {
    buttonStyles: {
        marginLeft: 10,
    }
}


// * TODO: Update the store so that if array[0] is empty that value is set on the state
// Add alert message for if the user searches for a city and no results are found

class SearchBar extends Component {
    constructor(props){
        super(props);

        this.state = { term: '' }

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event){
        this.setState({ term: event.target.value });
    }

    onFormSubmit(event){
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({ term: '' });
    }

    render(){
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input 
                    className="form-control"
                    value={this.state.term} 
                    placeholder="Get a five-day forecast in your favorite cities" 
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button style={styles.buttonStyles} color='primary' type='submit' className="btn btn-primary">Submit</button>
                </span>
            </form>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);