import React, { Component } from 'react';
import './App.css';
import List from './List';
import SearchBox from './SearchBox.js';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
  constructor() {
    super()
    this.state = {
      people: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch("https://swapi.co/api/people/")
    .then(response => response.json())
    .then(user => this.setState({ people: user.results }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render(){
    const { people, searchfield } = this.state;
    const filteredperson = people.filter(person => {
      return person.name.toLowerCase().includes(searchfield.toLocaleLowerCase());
    })
    return !people.length ? (<div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue-only">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="circle"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>) : (
      <div className="App">
        <h1>Star Wars</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <ErrorBoundry>
            <List people={filteredperson}></List>
          </ErrorBoundry>
        </Scroll>
      </div>
    );
  }
}

export default App;
