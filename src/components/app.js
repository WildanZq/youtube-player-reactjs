import React, { Component } from 'react';

import SearchBar from './search_bar';

const API_KEY = 'AIzaSyCrGuymQRs9fW9bFr8p4ZPldPZTYO0CCm8';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
      </div>
    );
  }
}
