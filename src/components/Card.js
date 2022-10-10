//Card.js
//Tipically used to describe containers with round looks, drop-shadows and other elements
import './Card.css';

const cardsprops = [
    
]

function Card(props) {
    return <div className="card">{props.children}</div>
}

export default Card;