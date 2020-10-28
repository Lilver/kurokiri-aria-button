import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route component={Home} path="/"/>
      </Switch>
    )
  }
}


export default App;
