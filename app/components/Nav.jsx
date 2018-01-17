import React from 'react';
import {Link, IndexLink} from 'react-router';

var Nav = () => {
    return (
      <div>
        <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
        <Link to="/about" activeClassName="active"  activeStyle={{fontWeight: 'bold'}}>About</Link>
        <Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link>
      </div>
    );
  };

module.exports = Nav;
