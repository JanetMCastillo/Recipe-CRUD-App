import React from "react";

function NewRecipeFormat({recipe, index, deleteHandler}){
    return (
        <tr key={index} id={index}>
            <td>{recipe.name}</td>
            <td>{recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="Finished recipe"/></td>
            <td className="content_td"><p>{recipe.ingredients}</p></td>
            <td className="content_td">
              <p>{recipe.preparation}</p></td>
            <td><button 
                  name="delete" 
                  onClick={deleteHandler}>Delete</button></td>
        </tr>
    )
}

export default NewRecipeFormat;