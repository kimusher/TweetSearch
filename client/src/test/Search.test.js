/* eslint no-unused-expressions: 0 */
import React from 'react';
import Search from '../components/Search';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai, { expect } from 'chai';
import { spy } from 'sinon';
import sinonChai from 'sinon-chai';
chai.use(sinonChai);

Enzyme.configure({ adapter: new Adapter() });

describe.only('test the From component', () => {
    let wrapper, searchSpy;

    beforeEach(() => {


    })
    searchSpy = spy();
    wrapper = shallow(<Search getTweets={searchSpy}></Search>);
    it('call getTweets when search is clicked', () => {
        wrapper.find('.form__search').simulate('submit');
        expect(searchSpy).to.have.been.called;


    })
})