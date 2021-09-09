import React from 'react';

import { Meta, Story } from '@storybook/react';

import { Container as Component, ContainerProps as Props } from './Container';

const ComponentStory: Meta<Props> = {
  component: Component,
  title: 'Container',
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
