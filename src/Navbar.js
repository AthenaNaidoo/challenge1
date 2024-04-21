//no longer in use

//import { Link } from 'react-router-dom';
import { useState } from 'react';

//Navigation bar to hold the search bar, favorites and drop down 
function Navbar({ searchTerm, setSearchTerm, selectedDiet, setSelectedDiet, setSelectedRecipe }) {
    //const [selectedDiet, setSelectedDiet] =useState('');

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setSelectedRecipe(null);
  };

  const handleDietChange= (e) =>{
    setSelectedDiet(e.target.value);
  };


 return (
    <nav>
        <h1 className='nav-title'>
            Navbar
        </h1>

     {/* <select value={selectedDiet} onChange={handleDietChange}>
        <option value="">All Diets</option>
        <option value="Vegetarian">Vegetarian</option>
        <option value="Pescatarian">Pescatarian</option>
        <option value="Vegan">Vegan</option>

      </select>
    */}
    </nav>
  );
}

export default Navbar;
