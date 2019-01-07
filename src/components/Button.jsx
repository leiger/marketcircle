import React from 'react';
import cx from 'classnames';

import './Button.scss';

export default function Button ({className, ...props}) {
  return <button className={cx('btn', className)} {...props}/>
}

