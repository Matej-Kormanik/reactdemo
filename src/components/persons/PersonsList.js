import React, {Component} from 'react';
import Person from "./Person/Person";

class PersonsList extends Component {


    shouldComponentUpdate(nextProps, nextState, nextContext) {
        console.log("[personList.js] : shouldComponentUpdate");
        return (nextProps.persons !== this.props.persons ||
            nextProps.clicked !== this.props.clicked ||
            nextProps.changed !== this.props.changed);
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("[personList.js] : getSnapshotBeforeUpdate");
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("[personList.js] : componentDidUpdate");
    }


    render() {
        console.log("[personList.js] : rendering");
        return this.props.persons.map((person, index) => {
            return  <Person
                        click={() => this.props.clicked(index)}
                        isAuth={this.props.isAuthenticated}
                        name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.changed(event, person.id)}/>
            });
    }


}




export default PersonsList;