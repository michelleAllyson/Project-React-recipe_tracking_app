import React, { useState } from "react";

function RecipeView({ recipe, index, deleteRecipe }) {
    const handleDelete = () => {
        deleteRecipe(index);
    };


    return (
        <tr>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td>{recipe.photo}</td>
            <td>{recipe.ingredients}</td>
            <td>{recipe.preparation}</td>
            <td>
                <button name="delete" onClick={handleDelete}>
                    Delete
                </button>
            </td>
        </tr>
    );
}

export default RecipeView;