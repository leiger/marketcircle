import React from 'react';
import cx from 'classnames';

import './Card.scss';

export default function Card({children, className}) {
  return (
    <div className={cx('card', className)}>
      {children}
    </div>
  )
}

function CardHeader({children, className}) {
  return (
    <div className={cx('cardHeader', className)}>
      {children}
    </div>
  )
}

function CardContent({children, className}) {
  return (
    <div className={cx('cardContent', className)}>
      {children}
    </div>
  )
}

Card.Header = CardHeader;
Card.Content = CardContent;