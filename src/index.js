import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory, IndexRedirect} from 'react-router'
import {App, Page1, Page2, NotFound} from './App';
import './index.css';


const routes = (
  <Router history={hashHistory}>
    <Route path='/' component={App}>
      <IndexRedirect to='/page1'/>
      <Route path='/page1' component={Page1}/>
      <Route path='/page2' component={Page2}/>
      <Route path='*' component={NotFound}/>
    </Route>
  </Router>
)
// Implementa las rutas aca

ReactDOM.render(
  routes, // Es posible que tengas que hacer un cambio en esta linea.
  document.getElementById('root')
);
