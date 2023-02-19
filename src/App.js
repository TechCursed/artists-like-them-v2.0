import './App.css';
import { useState, useEffect } from "react";
import Axios from 'axios';
import ArtistTile from './components/ArtistTile';


function App() {

  const [query, setquery] = useState("");
  const [artists, setArtists] = useState([]);

  // const APP_ID =  `45001569`;
  const APP_KEY = "dd8013a2d0275a318511e02e3a3e2e4f";

  const url = `https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=${query}&api_key=${APP_KEY}&format=json`;

  // https://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=drake&api_key=dd8013a2d0275a318511e02e3a3e2e4f&format=json

  const getArtistInfo = async () => {
    var result = await Axios.get(url);
    let data = result.data.similarartists.artist;
    setArtists(data);
    console.log(data.map((d) => d.name));
  
  };
  

  const onSubmit = (e) => {
    e.preventDefault();
    getArtistInfo();
  };

return (
    <div className="app">
      <h1 onClick={getArtistInfo}>Artists Like Them</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app_input"
          type="text"
          placeholder="Enter Ingredients"
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
