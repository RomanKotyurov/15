export default function Description(props) {
    return(
    <div className="text-grey">
    <h2 className="text-center">Описание блюда:</h2>
    <p>{props.description}</p>
    </div>
    )
}