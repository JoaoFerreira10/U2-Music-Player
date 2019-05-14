import React from 'react';
import Logo from '../style/u2-logo.png';
import MusicList from './MusicList';
import deezer from '../api/deezer';

class App extends React.Component {

  state = { musics: [], selectedMusic: "", selectedRow: null };

  constructor() {
    super();
    this.getMusics();
  }

  getMusics = () => {
    deezer.getInstance().getMusics()
    .then(data => this.setState({musics: data.data}) );
  }

  playMusic = music => {
    this.setState({selectedRow: music.id})
    this.setState({selectedMusic : music.preview});
    this.refs.music.pause();
    this.refs.music.load();
    this.refs.music.play();
  }

  render() {
    return (
      <div className="container">
        <div className="g-row text-center">
          <img src={Logo} className="rounded mx-auto d-block" alt="U2"/>
          <h3>U2 Music Player</h3>
        </div>
        <div className="g-row">
          <MusicList musics={this.state.musics} selected={this.state.selectedRow} playMusic={this.playMusic}/>
        </div>
        <div className="audio-player">
        <audio controls className="embed-responsive-item" ref="music">
            <source src={this.state.selectedMusic}/>
        </audio>
        </div>
      </div>
    );
  }
}

export default App;
