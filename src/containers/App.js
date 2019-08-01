import React, { Component } from 'react';
import classes from './App.css';
import PersonsList from '../components/persons/PersonsList'
import Cockpit from '../components/cockpit/Cockpit'
import withClass from '../hoc/WithClass'
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props) {
    super(props);
    console.log('app.js constructor');
  }

  componentDidMount() {
    console.log("[app.js] : component did mount");
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log("[app.js] : should component update");
    return true;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[app.js] : component did update");
  }

  state = {
    persons: [
      { id: 'asfa1', name: 'Max', age: 28 },
      { id: 'vasdf1', name: 'Manu', age: 29 },
      { id: 'asdf11', name: 'Stephanie', age: 26 }
    ],
    showPersons: false,
    changeCounter: 0,
    authenticated: false
  };

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( (prevState, props) => {
      return {
        persons: persons,
        changeCounter: prevState.changeCounter + 1}
    });
  };

  deletePersonHandler = ( personIndex ) => {
    // const PersonsList = this.state.PersonsList.slice();
    const persons = [...this.state.persons];
    persons.splice( personIndex, 1 );
    this.setState( { persons: persons } );
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState( { showPersons: !doesShow } );
  };

  loginHandler = () => {
    this.setState({
      authenticated: true
    })
  };

  render () {
    console.log("[App.js] : rendering");
    let personList = null;
    if ( this.state.showPersons ) {
      personList =
          <PersonsList
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/>;
    }

    return (
        <div>
          <AuthContext.Provider value={
            {authenticated: this.state.authenticated,
              login: this.loginHandler}}>
            <Cockpit
              showPersons={this.state.showPersons}
              personsLength={this.state.persons.length}
              clicked={this.togglePersonsHandler}
              title={this.props.title}/>
            <p>{this.state.changeCounter}</p>
            {personList}
          </AuthContext.Provider>
        </div>
    );
  }

}

export default withClass(App, classes.App);
