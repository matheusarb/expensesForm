//Card.js
//Tipically used to describe containers with round looks, drop-shadows and other elements
import './Card.css';

function Card(props) {
    return <div className="card">{props.children}</div>
}

export default Card;