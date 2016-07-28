/**
 * Created by HUGO on 7/26/2016.
 */

import React, { Component, PropTypes} from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexRoute, browserHistory } from 'react-router';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './modules/todoList/containers/App'
import todoApp from './modules/todoList/reducers'
import BindInput from './modules/mySamples/components/BindInput'
import HelloOpacity from './modules/mySamples/components/HelloOpacity'
import HelloProps from './modules/mySamples/components/HelloProps'
import HelloRef from './modules/mySamples/components/HelloRef'
import HelloState from './modules/mySamples/components/HelloState'
import HelloWorld from './modules/mySamples/components/HelloWorld'



let store = createStore(todoApp);
let rootElement = document.getElementById('app')
class TodoContain extends Component {
    render() {
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <header>
                    <ul>
                        <li><Link to="/app">todoList</Link></li>
                        <li><Link to="/bind">Inbox</Link></li>
                        <li><Link to="/helloOpacity">helloOpacity</Link></li>
                        <li><Link to="/helloState">helloState</Link></li>
                        <li><Link to="/helloRef">helloRef</Link></li>
                        <li><Link to="/helloWorld">helloWorld</Link></li>
                        <li><Link to="/helloProps">helloProps</Link></li>
                    </ul>
                    Logged in as Jane
                </header>
        {this.props.children}
            </div>
        );
    }
};
render((
    <Router history={browserHistory}>
        <Route path="/" component={Content}>
            <IndexRoute component={TodoContain}/>
            <Route path="app" component={TodoContain}/>
            <Route path="bind" component={BindInput}/>
            <Route path="helloWorld" component={HelloWorld}/>
            <Route path="helloProps" component={HelloProps}/>
            <Route path="helloRef" component={HelloRef}/>
            <Route path="helloState" component={HelloState}/>
            <Route path="helloOpacity" component={HelloOpacity}/>
        </Route>
    </Router>
), rootElement);