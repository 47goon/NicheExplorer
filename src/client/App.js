import React, { Component } from 'react';
import './app.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Search from './Search';
import Loading from './components/Loading';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Search} />
          <Route exact path="/RequestNicheSearch/:query" component={Loading} />
        </div>
      </Router>
    );
  }
}
