import React from 'react'
import "./ArtistTile.css";

export default function ArtistTile({artist}) {

  return (
     
      <div className="ArtistsTile" >
        
        <h4>{artist.name}</h4>
        <h5><a href={artist.url }  target="_blank" rel="noopener noreferrer"> Explore</a></h5>
      </div>
      
  );

}