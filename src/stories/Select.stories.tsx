import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Typography } from '../components/typography/Typography';
import '../components/Box/Box.scss';
import { Select } from '../components/select/Select';


export default {
  title: 'Example/Select',
  component: Select,
  argTypes: {

  },
} as Meta;

const Template: Story = (args) => <Select {...args}>
</Select>;

export const Primary = Template.bind({});
Primary.args = {
  
};