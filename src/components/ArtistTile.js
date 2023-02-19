import React from 'react'
import "./ArtistTile.css";


export default function ArtistTile({artist}) {


  return (
    <div className="ArtistsTile" >
      <h3>{artist.name}</h3>
      <p>explore</p>
      {/* <img className= "recipeTile_img" alt="recipe_image" src={recipe["recipe"]["image"]} />
      <h5>Type : {recipe["recipe"]["dishType"]}</h5>
      <h5>Cuisine : {(recipe["recipe"]["cuisineType"])}</h5>
      <h5>Calories : {Math.floor(recipe["recipe"]["calories"])}</h5>
      <a href={recipe["recipe"]["url"]}>READ MORE</a>     */}
    </div>
  );

}