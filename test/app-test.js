import React from 'react';
import { describe, it } from 'mocha';
import { expect } from 'chai';
import { render } from 'enzyme';
import App from '../app/containers/App';

describe('True', () => {
  it('true is true', () => {
    expect(true).to.equal(true);
    // expect(shallow(<App />).is('.app')).to.equal(true);
  });
});

describe('App Container', () => {
  it('name parameter exists & prints Hello World', () => {
    const wrapper = render(<App name='World'/>);
    expect(wrapper.text()).to.contain('Hello World');
  });
});
