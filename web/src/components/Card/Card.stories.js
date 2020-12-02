import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewCard from './Card';

storiesOf('ReviewCard', module)
    .add('default', () => <ReviewCard></ReviewCard>, {
        design: {
          type: 'figma',
          url: 'https://www.figma.com/file/JbArU62KFUUlOFK4VKJIjE/Storybook-test?node-id=1%3A3',
        },
      });