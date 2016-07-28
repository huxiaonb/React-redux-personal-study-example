/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'
export default class HelloState extends Component {
    constructor(){
        super();
        this.state = {
            link: true
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({link : !this.state.link});
    }
    render() {
        let text = this.state.link ? 'Like' : 'don\'t Like';
        return (
            <p onClick={this.handleClick}>You {text} papapa. Click this to change</p>
        )
    }
}