import { useState, useEffect } from "react";
import Axios from 'axios';
import ArtistTile from './components/ArtistTile';
import './App.css';

function App() {

  //for setting the user input 
  const [query, setquery] = useState("");
  //for maintaining the state of artist queried
  const [artists, setArtists] = useState([]);

  const APP_KEY = "dd8013a2d0275a318511e02e3a3e2e4f";

  //URL for the API Call
  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query}&api_key=${APP_KEY}&format=json`;

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
      <h2>🎧 ArtistsLikeThem</h2>

      <h1>Discover artists similar to the artist you love</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="Your artist name here"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app_submit" type="submit" value="Search" />
      </form>

      <br></br>  

      <div className="app_recipes" >
        {artists !== [] &&
          artists.map((artist) => {
            return <ArtistTile artist={artist} key={artist.name}/>
          })}
      </div>
    </div>
  );

}

export default App;
