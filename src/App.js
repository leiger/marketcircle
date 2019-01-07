import React, {Component} from 'react';
import {Switch, Redirect, Route} from 'react-router-dom';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Main from './pages/Main';
import Others from './pages/Others';

library.add(faBars, faTimes);

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/others' component={Others}/>
        <Redirect to='/others'/>
      </Switch>
    );
  }
}

export default App;
