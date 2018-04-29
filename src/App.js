import React, { Component } from 'react';

import './App.css';
import Header from './header'
import { BrowserRouter} from 'react-router-dom';
import Routes from './route'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header/>
            <Routes/> 
          </div> 
        </BrowserRouter>
       

      </div>
    );
  }
}

export default App;
