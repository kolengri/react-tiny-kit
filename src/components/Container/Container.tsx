import React, { FC } from 'react';

import classnames from 'classnames';

import styles from './Container.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type ContainerProps = {} & OuterProps;

export const Container: FC<ContainerProps> = (props) => {
  const { className, children, ...otherProps } = props;
  return (
    <div
      className={classnames(Container.displayName, styles.Container, className)}
      data-testid="Container"
      {...otherProps}
    >
      {children}
    </div>
  );
};
