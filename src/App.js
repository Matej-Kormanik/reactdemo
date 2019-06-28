import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component{

    state = {
        persons: [
            {id: "a1", name: "Mato", age: 25},
            {id: "b2", name: "Peto", age: 64},
            {id: "c3", name: "Miro", age: 29},
        ],
        otherState: 'some other state',
        showPerson: false
    };


    deletePersonHandler = (index) => {
        const personArray = this.state.persons.slice();
        personArray.splice(index, 1);
        this.setState({persons: personArray})
    };

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {return p.id === id});
        let person = {...this.state.persons[personIndex]};
        person.name = event.target.value;

        const personList = [...this.state.persons];
        personList[personIndex] = person;
        this.setState({persons: personList});
    };


    togglePersonsHandler = () => {
        this.setState({showPerson: !this.state.showPerson});
    };

    render() {
        const buttonStyle = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;
        if (this.state.showPerson) {
            persons = (<div>
                {this.state.persons.map((aPerson, index) => {
                    return <Person
                            name={aPerson.name}
                            age={aPerson.age}
                            click={() => this.deletePersonHandler(index)}
                            changed={(event) => this.nameChangedHandler(event, aPerson.id)}
                            key={aPerson.id} />
                })}
            </div>);
        }


        return (
            <div className="App">
                <h1>Ahoj</h1>
                <button
                    onClick={this.togglePersonsHandler}
                    style={buttonStyle}>switch users</button>
                {persons}
            </div>
        );
    }


}




export default App;
