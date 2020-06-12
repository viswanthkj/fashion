import React from 'react';
import {
  Switch,
  Route,
} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component'

const Hats = () => (
  <div>
  <h1>HATS PAGE</h1>
  </div>
) 

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/hats' component={Hats}/>
      </Switch>
    </div>
  );
}

export default App;
