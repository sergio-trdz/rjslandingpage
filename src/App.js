import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Front from './components/Front'
import Footer from './components/Footer'

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
      <Front />
      <Footer />
    </div>
    );
  }
}

export default App;

