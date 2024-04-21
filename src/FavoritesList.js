// list of favorites

export function FavoritesList({ favorites }) {

  
  return (
    <div>
      <h2>Favorites:</h2>
      {favorites.map((favRecipe, key) => (
        <div key={key}>{favRecipe}</div>
      ))}
    </div>
  );
};
