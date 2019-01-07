import React from 'react';
import cx from 'classnames';

import './Nav.scss';

export default function Nav({items, className}) {
  const navItems = items.map((item, index) =>
    <li className='navItem' key={index}>{item}</li>
  );

  return <ul className={cx('navBar', className)}>{navItems}</ul>;
}
