/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'
export default class HelloProps extends Component {
    render(){
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
            </div>
        );
    }
}
HelloProps.defaultProps = { name: 'Gordon' };