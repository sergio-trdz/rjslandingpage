import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Front from './components/layouts/Front'
import Footer from './components/layouts/Footer'
//react router import
import { Switch, Route } from 'react-router-dom';
//pages import
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import ContactMe from './components/pages/ContactMe';
//view for background color import
import { View } from "react";

//white background color
const view = () => {
  return (
    <View style={{backgroundColor: 'white', flex:1}}>
     
    </View>
   );
 };

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/contactme" component={ContactMe}/>
      </Switch>
      <Footer />
    </div>
    );
  }
}

export default App;

