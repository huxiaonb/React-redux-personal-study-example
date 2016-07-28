/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'
export default class HelloOpacity extends Component {
    constructor(){
        super();
        this.state = {
            opacity : 1
        }
    }
    componentDidMount() {
        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity -= 0.05;
            if(opacity < 0.1){
                opacity = 1;
            }
            this.setState({opacity:opacity});
        }.bind(this), 100);
    }
    render() {
        return (
          <div style={{opacity : this.state.opacity}}>Hello World!</div>
        );
    }
}