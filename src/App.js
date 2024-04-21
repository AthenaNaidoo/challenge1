import React, { useState } from 'react';
//import {BrowserRouter,Router,Switch, Route, Routes } from 'react-router-dom';
import './App.css';
import Data from './recipe.json';
import {RecipeList} from './RecipeList';
import {RecipeDetails} from './RecipeDetails';
import {FavoritesList} from './FavoritesList';
import Navbar from './Navbar';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [selectedDiet, setSelectedDiet] = useState('');
  

//why isn't it working??
  const handleInputChange = (e) => {
    if (e.target.type === 'text') {
      setSearchTerm(e.target.value);
    } else if (e.target.type === 'select') {
      setSelectedDiet(e.target.value);
    }
    setSelectedRecipe(null);
  };

  // Filters recipes based on the search term, diet, or meal type
  //this only works for the search bar, affects the dropdown select 
  const filteredRecipes = Data.recipes.filter((recipe) => {
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      recipe.name.toLowerCase().includes(lowerSearchTerm) ||
      recipe.mealType.toLowerCase().includes(lowerSearchTerm) &&
      (selectedDiet === '' || recipe.diet === selectedDiet)
    );
  });

  //when a diffrent diet is selected in the dropdown it updates the selected diet and sets the selected recipe(recipe detail) to none 
  const handleDietChange= (e) =>{
    setSelectedDiet(e.target.value);
    setSelectedRecipe(null);
  };

//supposed to filter recipes based on the diet selected 
  const dietHandler = Data.recipes.filter((recipe)=>{
    return recipe.diet ===selectedDiet;
  })

  // adds a recipe as a favorite
  const toggleFavorite = (recipeName) => {
    if (favorites.includes(recipeName)) {
      setFavorites(favorites.filter((fav) => fav !== recipeName));
    } else {
      setFavorites([...favorites, recipeName]);
    }
  };

  // handles recipe selection
  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

//updates the value of the search term. when the search bar is pressed the selected recipe and the diet selected are reset.
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    //console.log(e);
   setSelectedRecipe(null);
    setSelectedDiet("");
  };

  return (
    <div className="App">
      <h1 className='site-title'>Recipes</h1>
      <input className='search'
        type="text"
        placeholder="Search by recipe name, diet, or meal type..."
        onChange={handleSearch}
        value={searchTerm}
      />
      
      <select value={selectedDiet} onChange={handleDietChange}>
        <option value="">All Diets</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescatarian">Pescatarian</option>
        <option value="Vegan">Vegan</option>

      </select>
      <div className="list">
      <RecipeList recipes={filteredRecipes} handleRecipeClick={handleRecipeClick} handleDietChange={handleDietChange} />
      </div>
      <h1>Recipe Details</h1>

      <div className="details">
      {selectedRecipe && (
  <RecipeDetails
    selectedRecipe={selectedRecipe}
    toggleFavorite={toggleFavorite}
    favorites={favorites}
  />
)}
</div>
<div className="fave">
     <FavoritesList favorites={favorites} /> 
     </div>
    </div>
  );
}

export default App;
