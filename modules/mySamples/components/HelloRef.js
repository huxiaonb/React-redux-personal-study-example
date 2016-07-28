/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'
export default class HelloRef extends Component {
    constructor() {
        super();
        this.refs = {};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.refs.myTextInput.focus();
    }
    render() {
        return(
            <div>
                <input type="text" ref="myTextInput"/>
                <button onClick={this.handleClick}>Focus</button>
            </div>
        );
    }
}