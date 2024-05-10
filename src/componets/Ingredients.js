export default function Ingredients(props) {

    return(
        <div className="ingredients">
            <h2 className="text-center">Ингредиенты:</h2>
            <ul>
                {props.array.map(
                    (ingredient, key) => <li key={key}>{ingredient}</li>
                )}
            </ul>
        </div>
    )
}