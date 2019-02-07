import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import MenuSuperior from './compoents/MenuSuperior/MenuSuperior';
import Resumo from './compoents/Resumo/Resumo';

class App extends Component {
  render() {
    return (
      <div className="">
        <MenuSuperior/>
        <Resumo/>
      </div>
    );
  }
}

export default App;
