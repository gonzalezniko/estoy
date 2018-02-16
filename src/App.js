import React, { Component } from 'react';
import Header from './components/Header';
import List from './components/List';
import Modal from './components/Modal';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <List />
        <Modal />
      </div>
    );
  }
}

export default App;
