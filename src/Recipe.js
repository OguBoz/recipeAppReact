import React from 'react';
import style from './recipe.module.css';

const Recipe = function({title, calories, image, ingredients}) {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ing=>(
                    <li>{ing.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img src={image} className={style.image} alt=""/>
        </div>
    ) 
}


export default Recipe;