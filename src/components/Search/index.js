import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import noop
  from 'lodash/noop';

class Search extends PureComponent {
  static propTypes = {
    onSearch: PropTypes.func,
  };

  static defaultProps = {
    onSearch: noop,
  };

  state = {
    search: '',
  };

  handleOnChange = ({ target: { value } }) => {
    this.setState({
      search: value,
    });
  };

  handleOnClickSearch = () => {
    const {
      onSearch,
    } = this.props;
    const {
      search,
    } = this.state;

    onSearch(search);
  };

  render() {
    return (
      <div
        style={{
          display: 'flex',
        }}
      >
        <input
          onChange={this.handleOnChange}
          style={{
            display: 'flex',
            flexGrow: 1,
          }}
        />
        <button onClick={this.handleOnClickSearch}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
