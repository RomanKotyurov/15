export default function Ingridients(props) {
    let array = props.ingridients
    let iString = ''
    array.forEach(element => {
        iString += 
        `${element.name}: ${element.quantity}; `
    });
    return(
    <p className="text-grey">{iString}</p>
    )
}