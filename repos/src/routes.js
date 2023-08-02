import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Main from './pages/Main';
import Repositorio from './pages/Repositorio'

export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/" component={Repositorio}/>
      </Switch>
    </BrowserRouter>
  )
}