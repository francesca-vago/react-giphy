import giphy from 'giphy-api';
import React, { Component } from 'react';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gifs: [],
      selectedGifId: "581Zvttgt7Witjgc0Y"
    };
  }

  search = (query) => {
    // TODO: API call
    giphy('LAQqU948ZYVYsNM3GGJSfKuCTPON4Xck').search({
      q: query,
      rating: 'g',
      limit: 5
    }, (error, result) => {
      this.setState({
        gifs: result.data
      });
    });
  }

  render() {
    return (
      <div>
        <div className="left-scene">
          <SearchBar searchFunction={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;

