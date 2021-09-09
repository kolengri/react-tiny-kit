import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { ButtonProps as Props, Button as Component } from './Button';

const ComponentStory: Meta<Props> = {
  title: 'Button',
  component: Component,
};

/**
 * Base Example
 * @param args
 */
const BaseExampleTemplate: Story<Props> = (args) => (
  <div style={{}}>
    <Component {...args} />
  </div>
);

export const BaseExample = BaseExampleTemplate.bind({});

BaseExample.args = {};

export default ComponentStory;
