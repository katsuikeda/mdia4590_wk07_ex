import './RecipeList.css';

export default function RecipeList({ data, isLoaded, error }) {

    // four possibilities: loading, loaded but error, loaded no data and loaded with data
    if (!isLoaded) {

        return (
            <div>
                Loading...
            </div>
        );
    }
    else if (error) {
        // error is an object so if we wanted to we could extract the message from it
        return (
            <div>
                There was an error loading your data
            </div>
        );
    }
    else if (data.meals === null) {
        // check Postman with an invalid cuisine you'll see it returns meals as null
        return (
            <div>
                No recipes matched your request
            </div>
        );
    }
    else {

        return (
            <div className="recipe-container">
                {data.meals.map(drawRecipeCard)}
            </div>
        );
    }
}

// helper function to draw one recipeCard
function drawRecipeCard(item) {
    return (
        <div key={item.idMeal} className="recipe-card">
            <div>
                <img src={item.strMealThumb} className="recipe-image" />
            </div>
            <div className="recipe-name">
                {item.strMeal}
            </div>
        </div>
    )
}