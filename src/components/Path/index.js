import React, {
  PureComponent,
} from 'react';

import PropTypes
  from 'prop-types';

import map
  from 'lodash/map';

class Path extends PureComponent {
  static propTypes = {
    path: PropTypes.arrayOf(PropTypes.string),
  };

  static defaultProps = {
    path: [],
  };

  render() {
    const {
      path,
    } = this.props;

    return (
      <div>
        {map(path, (node, idx) => (
          <span style={{
            marginRight: 12
          }}>
            {node} {idx !== path.length - 1 ? '>' : null}
          </span>
        ))}
      </div>
    );
  }
}

export default Path;
