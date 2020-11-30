import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewStepper from './Stepper';

storiesOf('ReviewStepper', module)
    .add('default', () => <ReviewStepper></ReviewStepper>);