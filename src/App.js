import { useState } from "react";
import Axios from 'axios';
import ArtistTile from './components/ArtistTile';
import './App.css';

function App() {

  //for setting the user input 
  const [query, setquery] = useState("");
  //for maintaining the state of artist queried
  const [artists, setArtists] = useState([]);

  const APP_KEY = "KEY";

  //URL for the API Call
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query.trim()}&api_key=${APP_KEY}&format=json`;

  //fuction to fetch the results from the API 
  const getArtistInfo = async () => {
    
    var result = await Axios.get(url);

    //storing the data into data variable
    let data = result.data.similarartists.artist;

    //updating the state
    setArtists(data);  
  };
  

  //onSubmit for the post button click
  const onSubmit = (e) => {
    //prevents the app from reloading
    e.preventDefault();

    //calling the getArtistInfo function
    getArtistInfo();
  };



return (
  
    <div className="app">
      <h3>🎧 ArtistsLikeThem</h3>

      <h2>Discover artists similar to the artist you love</h2>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="  Enter artist name"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <br></br>  

      <div className="app_artist" >
        {artists !== [] &&
          artists.map((artist) => {
            return <ArtistTile artist={artist} key={artist.name}/>
          })}
      </div>
    </div>
  );

}

export default App;
