import React, { FC } from 'react';

import classnames from 'classnames';

import styles from './Button.module.css';

type OuterProps = JSX.IntrinsicElements['button'];

export type ButtonProps = {} & OuterProps;

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <button
      className={classnames(styles.Button, className)}
      data-testid="Button"
      type="button"
      {...otherProps}
    >
      {children}
    </button>
  );
};
