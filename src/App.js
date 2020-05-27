import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = function() {

  const api_id = "e11351f2";
  const api_key = "258f3a33bddfed1545e3fc0f9bdc460b";


  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  },[query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  }

  const updateSearch = e => {
    setSearch(e.target.value);
    console.log(search);
  }


  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
        <form className="search-form" onSubmit={getSearch}>
            <input type="text" className="search-bar" value={search} onChange={updateSearch} />
            <button type="submit" className="search-button">Search</button>
        </form>
        <div className="recipes">
            {recipes.map((recipe, index) => (
            <Recipe key={index} title ={recipe.recipe.label} calories={recipe.recipe.calories} 
                      image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/> 
            ))}
        </div>
    </div>
  );
}

export default App;
