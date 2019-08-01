import React, {Component, Fragment} from 'react';
import witClass from '../../../hoc/WithClass'
import classes from './Person.css'
import PropTypes from 'prop-types'
import AuthContext from "../../../context/auth-context";


class Person extends Component {

    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        console.log("[Person.js] : componentDidMOUNT");
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated);
    }

    render() {
        console.log("[Person.js] : rendering");
        return (
            <div>
                { this.context.authenticated ? <p>Authenticated</p> : <p>please log in</p> }
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElementRef}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
            </div>
        )
    }

}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};


export default witClass(Person, classes.Person);
