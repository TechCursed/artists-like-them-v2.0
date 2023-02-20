import React from 'react'
import "./ArtistTile.css";


export default function ArtistTile({artist}) {


  return (
     
      <div className="ArtistsTile" >
        
        <h3>{artist.name}</h3>
        <h2><a href={artist.url }  target="_blank"> Explore</a></h2>
        
      </div>
      
  );

}