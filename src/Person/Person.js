import React from 'react';

import classes from './Person.css';

const person = ( props ) => {

    // if (Math.random() < 0.3) throw new Error ("Daco sa doebalo");

    return (
        <div className={classes.Person}>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )

};

export default person;