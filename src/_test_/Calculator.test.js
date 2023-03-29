import React from 'react';
import renderer from 'react-test-renderer';

import Calculator from '../components/calculator';

it('matches snapshot', () => {
  const tree = renderer.create(<Calculator />).toJSON();
  expect(tree).toMatchSnapshot();
});
