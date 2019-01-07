import React, {Component} from 'react';

import {library} from '@fortawesome/fontawesome-svg-core';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

import Main from './pages/Main';

library.add(faBars, faTimes);

class App extends Component {
  render() {
    return (
      <Main/>
    );
  }
}

export default App;
