import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Loading from './components/Loading';
import './app.css';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'ddf'
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange() {
    this.setState({
      query: this.search.value
    });
  }

  render() {
    return (
      <div className="SearchBox">
        <h1>Niche Explorer!</h1>
        <form>
          <input
            placeholder="Search for..."
            ref={input => (this.search = input)}
            onChange={this.handleInputChange}
          />
          <br />
          <Link to={`/RequestNicheSearch/${this.state.query}`}>
            <button type="button">Explore Niche!</button>
          </Link>
        </form>
      </div>
    );
  }
}
