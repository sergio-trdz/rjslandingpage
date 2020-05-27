import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
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
      <Footer />
    </div>
    );
  }
}

export default App;

