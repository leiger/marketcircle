import React from 'react';
import cx from 'classnames';
import {Link} from 'react-router-dom';

import './Nav.scss';

export default function Nav({items, className}) {
  const navItems = items.map((item, index) =>
    <li className='navItem' key={index}>
      <Link to={item.to}>{item.name}</Link>
    </li>
  );

  return <ul className={cx('navBar', className)}>{navItems}</ul>;
}
