import React from 'react';
// import { storiesOf } from '@storybook/react';
import ReviewCard from './Card';
import { Meta } from "@storybook/react";
import { withDesign } from 'storybook-addon-designs'

export default {
  title: 'ReviewCard',
  parameters: {
    component: ReviewCard,
  },
  decorators: [withDesign],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Template = (args) => <ReviewCard {...args}></ReviewCard>
export const Primary = Template.bind({})

Template.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/JbArU62KFUUlOFK4VKJIjE/Storybook-test?node-id=1%3A3',
  },
}

Primary.args = {
  avatar: "A",
  title: "The Title",
  subtitle: "The Sub-title",
  body: "The body",
  backgroundColor: '#e00',
}

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/JbArU62KFUUlOFK4VKJIjE/Storybook-test?node-id=1%3A3',
  },
}
