import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../app/components/App';

describe('<App />', () => {
   it('app is app', () => {
    //    expect(shallow(<App />).contains(<div className="app" />)).to.equal(true);
    expect(shallow(<App />).is('.app')).to.equal(true);
   }) 
});