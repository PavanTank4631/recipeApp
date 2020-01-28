import React from 'react';

//
import './App.css';

const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className="container">
      <h1 className="title">{title}</h1>
      <img className="image" src={image} alt="" />
      <p>
        <p style={{fontWeight: 'bold', margin: 0, textAlign: "center"}}>Calories</p> {calories}
      </p>
      <h3 className="ingredientsText">Ingredients</h3>
      <ul className="list">
        {ingredients.map(item => (
          <li>{item}</li>
        ))}
      </ul>

    </div>
  );
};

export default Recipe;