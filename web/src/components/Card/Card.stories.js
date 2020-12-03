import React from 'react';
// import { storiesOf } from '@storybook/react';
import ReviewCard from './Card';
import { Meta } from "@storybook/react";
import { withDesign } from 'storybook-addon-designs'

// const Template = (args) => <ReviewCard {...args}/>

// export const Primary = Template.bind({})

// Primary.args = {
//   avatar: "A",
//   title: "The Title",
//   subtitle: "The Sub-title",
//   body: "The body",
// }

export default {
  title: 'ReviewCard',
  parameters: {
    component: ReviewCard,
  },
  decorators: [withDesign],
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
}

Primary.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/JbArU62KFUUlOFK4VKJIjE/Storybook-test?node-id=1%3A3',
  },
}
// storiesOf('ReviewCard', module)
//     .add('default', args => <ReviewCard></ReviewCard>, {
//         design: {
//           type: 'figma',
//           url: 'https://www.figma.com/file/JbArU62KFUUlOFK4VKJIjE/Storybook-test?node-id=1%3A3',
//         },
//       });