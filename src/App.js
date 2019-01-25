import React, { Component } from 'react';
import logo from './logo.svg';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/cart/Cart";
import Modal from "./components/Modal";
import Default from "./components/Default";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <Switch>
          <Route exact path = '/'  component = {ProductList}/>
          <Route path = '/details' component = {Details}/>
          <Route path = '/cart' component = {Cart}/>
          <Route component = {Default} />
        </Switch>
        <Modal/>
      </React.Fragment>
    );
  }
}

export default App;
