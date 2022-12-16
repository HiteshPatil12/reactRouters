import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Home} from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Navbar } from './components/Navbar';
import { Products } from './components/Products';
import { FeatureProduct } from './components/FeatureProduct';
import { NewProduct } from './components/NewProduct';
import { PageNotFound } from './components/PageNotFound';
import { Users } from './components/Users';
import { UsersDetails } from './components/UserDetails';
import { Counter } from './FunctionComponents/Counter';

export default class App extends React.Component {
  render(){
    return(
      <div>
      <Navbar/>
      <Counter/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/products" element={<Products/>}>
          <Route path="feature" element={<FeatureProduct/>}></Route>
          <Route path="new" element={<NewProduct/>}></Route>
          <Route index element={<FeatureProduct/>}></Route>
        </Route>
        <Route path="/users" element={<Users/>}></Route>
        <Route path="/users/:userid" element={<UsersDetails/>}/>
        <Route path="*" element={<PageNotFound/>}></Route>
      </Routes>
      </div>
    )
  }
}
