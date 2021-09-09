---
to: src/components/<%= name %>/<%= Name %>.tsx
---
import React, { FC } from 'react';

import classnames from 'classnames'

import styles from './<%= Name %>.module.css';

type OuterProps = JSX.IntrinsicElements['div'];

export type <%= Name %>Props = {} & OuterProps

export const <%= Name %>: FC<<%= Name %>Props> = (props) => {
  const { className, children, ...otherProps } = props;
  return <div className={classnames(<%= Name %>.displayName, styles.<%= Name %>, className)} data-testid="<%= name %>" {...otherProps}>{children}</div>;
};
