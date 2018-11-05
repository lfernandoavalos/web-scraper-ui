import React,{
  PureComponent,
} from 'react';

import DomLoader
  from './components/DomLoader';

class App extends PureComponent {
  render() {
    return (
      <div>
        <DomLoader />
      </div>
    );
  }
}

export default App;
