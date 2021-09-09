---
to: src/components/<%= name %>/<%= Name %>.stories.tsx
---
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';

import { <%= Name %>Props as Props, <%= Name %> as Component } from './<%= Name %>';

const ComponentStory: Meta<Props> = {
  title: '<%= Name %>',
  component: Component,
};

/**
 * Base Example
 * @param args
 */
const BaseExampleTemplate: Story<Props> = args => (
  <div style={{ }}>
    <Component {...args} />
  </div>
);

export const BaseExample = BaseExampleTemplate.bind({});

BaseExample.args = {};

export default ComponentStory;
