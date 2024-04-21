
import "./recipeList.css";

//render the list of all the recipes from the json file data 
export function RecipeList({ recipes, handleRecipeClick }) {
  return (
    <ul className='recipeList'>
      {recipes.map((recipe, key) => (
        <li key={key}>
          <span
            style={{ cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => handleRecipeClick(recipe)}
          >
            {recipe.name} 

          </span>
          <p>Tags: {recipe.tags.join(', ')}</p> 
        </li>
      ))}
    </ul>
  );
};


