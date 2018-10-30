import React, { Component } from 'react';
//import StudentDetails from './Students';
import Navbar from './reactComponents/Navbar'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './reactComponents/Home'
import About from './reactComponents/About'
import Contact from './reactComponents/Contact'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path='/' component = {Home} />
          <Route path='/About' component = {About}/>
          <Route path='/Contact' component = {Contact} />
        </div>
      </BrowserRouter>
     
      
    );
  }
}
export default App;
