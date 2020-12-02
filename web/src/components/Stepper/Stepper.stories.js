import React from 'react';
import { storiesOf } from '@storybook/react';
import ReviewStepper from './Stepper';
//import { withDesign } from 'storybook-addon-designs'

storiesOf('ReviewStepper', module)
    .add('default', () => <ReviewStepper></ReviewStepper>, {
        design: {
            type: "figma",
            url: ""
        }
    });

