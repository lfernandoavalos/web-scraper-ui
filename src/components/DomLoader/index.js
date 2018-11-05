import React,{
  PureComponent,
  createRef,
} from 'react';

import Dom
  from '../../packages/lib/Dom';

import getHtml
  from '../../packages/services/html';

import Search
  from '../Search';

import Path
  from '../Path';

class DomLoader extends PureComponent {
  state = {
    path: undefined,
  };

  constructor(props) {
    super(props);

    this.main = createRef();
  }

  handleOnCLick = (evt) => {
    const {
      target,
    } = evt;
    // Stop event bubbling all the way up
    evt.stopPropagation();
    evt.preventDefault();

    const dom = new Dom(target);
    // Skip idx for
    // html
    // body
    // div#root
    // div
    // div - this Container Div
    // div - main ref
    this.setState({
      path: dom.toArray().splice(6),
    });
  };

  handleOnClickSearch = async (url) => {
    const html = await getHtml(url);
    this.main.current.innerHTML = html;
  }

  render() {
    const {
      path,
    } = this.state;
    return (
      <div>
        <div style={{
          position: 'fixed',
          background: '#FFF',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 9999,
          padding: 24,
        }}>
          <Search onSearch={this.handleOnClickSearch} />
          {path ? <Path path={path} /> : 'Click on element to see path'}
        </div>
        <div
          ref={this.main}
          onClick={this.handleOnCLick}
        />
      </div>
    );
  }
}

export default DomLoader;
