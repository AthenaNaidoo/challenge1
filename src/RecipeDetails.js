//gives the user the details of the recipe once a recipe is clicked from the recipe list 

 export function RecipeDetails({ selectedRecipe, toggleFavorite, favorites }) {
  const isFavorite = favorites.includes(selectedRecipe.name);

  return (
    <div>
   
      <h2>{selectedRecipe.name}</h2>
      <p>Tags: {selectedRecipe.tags.join(', ')}</p>
      <p>Diet: {selectedRecipe.diet}</p>
      <p>Meal Type: {selectedRecipe.mealType}</p>
      <button onClick={() => toggleFavorite(selectedRecipe.name)}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </button> 
      
    </div>
  );
};


