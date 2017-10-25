import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('starting the app', () => {
  it('MUST render component <App /> without crashing', () => {
    const appComponent = shallow(<App />);
  });
});