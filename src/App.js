import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

let defaultTextColor = '#fff';
let defaultStyle = {
  color: defaultTextColor
};
let fakeServerData = {
  user: {
    name: 'Jon',
    playlists: [
      {
        name: 'My favorites',
        songs: [{name:'Song 1', duration: 1345}, {name:'Song 2', duration: 1236}, {name:'Song 3', duration: 1405}]
      },
      {
        name: 'Dance  Mix',
        songs: [{name:'Freeze', duration: 1345}, {name:'Lollipop', duration: 1236}, {name:'Trolls Dance', duration: 1405}]
      },
      {
        name: 'Christmas',
        songs: [{name:'Jingle Bells', duration: 1345}, {name:'O Holy Night', duration: 1236}, {name:'All I Want For Christmas', duration: 1405}]
      },
      {
        name: 'Workout Mix',
        songs: [{name:'Workout Song 1', duration: 1345}, {name:'Workout Song 2', duration: 1236}, {name:'Workout Song 3', duration: 1405}]
      }
    ]
  }
};

class PlaylistCounter extends Component {
  render() {
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{this.props.playlists.length} playlists</h2>
      </div>
    );
  }
}

class HoursCounter extends Component {
  render() {
    let allSongs = this.props.playlists.reduce((songs, eachPlaylist) => {
      return songs.concat(eachPlaylist.songs)
    }, [])
    let totalDuration = allSongs.reduce((sum, eachSong) => {
      return sum + eachSong.duration
    }, 0)
    return (
      <div style={{...defaultStyle, width: "40%", display: 'inline-block'}}>
        <h2>{Math.round(totalDuration/60)} hours</h2>
      </div>
    );
  }
}

class Filter extends Component {
  render() {
    return (
      <div style={defaultStyle}>
        <img/>
        <input type="text"/>
        Filter
      </div>
    );
  }
}

class Playlist extends Component {
  render() {
    return (
      <div style={{...defaultStyle, display: 'inline-block', width: "25%"}}>
        <img/>
        <h3>Playlist Name </h3>
        <ul><li>Song 1</li><li>Song 2</li><li>Song 3</li></ul>        
      </div>
    );
  }
}

class App extends Component {
  constructor() { //use constructor to set initial state
    super();
    this.state = {serverData: {}}
  }
  componentDidMount() {
    setTimeout(() => { //setTimeout is used to simulate how react would act. using arrow function
    this.setState({serverData: fakeServerData});
    }, 1000);
  }
  render() {
    let name = 'Jon'
    let color = '#FF1212'
    let headerStyle = {color: color, 'font-size': '50px'}
    return (
      <div className="App">
        {this.state.serverData.user ? //the question mark is a turnery operator to create a loading dialog
        <div>
          <h1 style={{...defaultStyle, 'font-size': '54px'}}>
            {this.state.serverData.user.name}'s Playlist
          </h1>
          <PlaylistCounter playlists= {this.state.serverData.user.playlists}/>
          <HoursCounter playlists= {this.state.serverData.user.playlists}/>
          <Filter/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
          <Playlist/>
        </div> : <h1 style={defaultStyle}>Loading...</h1>
        }
      </div>
    );
  }
}

export default App;
