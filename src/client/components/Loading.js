import React, { Component } from 'react';

import socketIOClient from 'socket.io-client';

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'Requesting job...',
      response: false,
      endpoint: 'http://127.0.0.1:8000'
    };
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on('status-update', () => {
      
      console.log('status-update');
    });
  }

  render() {
    return (
      <div className="SearchBox">
        <h1>
          Getting info on: <em>{this.props.match.params.query}</em>
        </h1>
        <h2 style={{ color: 'white' }}>{this.state.status}</h2>
      </div>
    );
  }
}
