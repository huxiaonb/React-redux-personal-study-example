/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'

export default class BindInput extends Component {
    constructor() {
        super();
        this.state = { value : 'Hello'};
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value : event.target.value });
    }
    render() {
        let value = this.state.value;
        return(
            <div>
            <input type="text" value={value} onChange={this.handleChange} />
            <p>{value}</p>
        </div>
        );
    }
}