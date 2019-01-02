import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Nav />
            <Route />
            <Route />
            <Route />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

// `/api/books` (get) - Should return all saved books as JSON.

// * `/api/books` (post) - Will be used to save a new book to the database.

// * `/api/books/:id` 