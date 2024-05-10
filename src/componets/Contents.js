export default function Ingredients(props) {

    // let ingredients = props.array
    // let ingredientElements = []
    // for (const ingredient of ingredients) {
    //     ingredientElements.push(<li>{ingredient}</li>)    
    // }
    // let ingredientElements = ingredients.map(
    //     (ingredient, key) => <li key={key}>{ingredient}</li>   
    //         ) 

    return(
        <div className="contents">
            <h2>Оглавление:</h2>
            <ul>
                {props.array.map(
                    (ingredient, key) => <li key={key}>{ingredient.name}</li>
                )}
            </ul>
        </div>
    )
}