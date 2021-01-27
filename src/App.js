import React from 'react';
import "./App.css";
import Index from "./components/Index";
import Add from "./components/Add";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import ImageUpload from './components/ImageUpload';

function App() {
  
  return (
    <Router>
  <div className="App">
    <Switch>
      <Route exact path="/" component={Index}/>
      <Route exact path="/add" component={Add}/>
      <Route exact path="/imgup" component={ImageUpload}/>
    </Switch>
  </div>
  </Router>

  );
}

export default App;
