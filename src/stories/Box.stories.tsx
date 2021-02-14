import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { Box, BoxProps } from '../components/Box/Box';
import { Typography } from '../components/typography/Typography';
import '../components/Box/Box.scss';


export default {
  title: 'Example/Box',
  component: Box,
  argTypes: {

  },
} as Meta;

const Template: Story<BoxProps> = (args) => <Box {...args}>
</Box>;

export const Primary = Template.bind({});
Primary.args = {
  
};

export const VariableWidth = Template.bind({});
VariableWidth.args = {
  width: 450
};

export const VariableHeight = Template.bind({});
VariableHeight.args = {
  height: 450
};

export const ClassicVariant = Template.bind({});
ClassicVariant.args = {
  variant: 'classic'
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Ness'
};

export const WithText = Template.bind({});
WithText.args = {
  children: <Typography content={"Ness abandoned the cookie."}/>
};

export const WithTextAnimated = Template.bind({});
WithTextAnimated.args = {
  children: <Typography content={"Ness abandoned the cookie."} animation/>
};

export const WithImage = Template.bind({});
WithImage.args = {
  children: <img src={'https://i.redd.it/e7s07jwaq3e21.png'}></img>
}