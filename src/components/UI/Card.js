//Card.js
//Tipically used to describe containers with round looks, drop-shadows and other elements
//children props {props.children}

import './Card.css';

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>
}

export default Card;