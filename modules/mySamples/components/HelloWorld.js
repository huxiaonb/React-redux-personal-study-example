/**
 * Created by HUGO on 7/28/2016.
 */
import React, {Component, PropTypes } from 'react'
export default class HelloWorld extends Component {
    render() {
        let arr = [
            <h1>Hello Hason!</h1>,
            <h1>Hello World!</h1>
        ];
        return(
          <div>{arr}</div>
        );
    }
}