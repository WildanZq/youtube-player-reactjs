import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import SearchBar from './search_bar';
import VideoList from './video_list';

const API_KEY = 'AIzaSyCrGuymQRs9fW9bFr8p4ZPldPZTYO0CCm8';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({ key: API_KEY, term: 'reactjs' }, (videos) => {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}
