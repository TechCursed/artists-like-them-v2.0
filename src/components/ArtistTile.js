import React from 'react'
import "./ArtistTile.css";


export default function ArtistTile({artist}) {


  return (
     
      <div className="ArtistsTile" >
        
        <h3>{artist.name}</h3>
        <h4><a href={artist.url }  target="_blank" rel="noopener noreferrer"> Explore</a></h4>

      </div>
      
  );

}