import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Button as Component, ButtonProps as Props } from './Button';

const ComponentStory: Meta<Props> = {
  argTypes: { onClick: { action: 'clicked' } },
  component: Component,
  title: 'Button',
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

BaseExample.args = { children: 'Button' };

export default ComponentStory;
