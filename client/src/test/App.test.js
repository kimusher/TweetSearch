/* eslint no-unused-expressions: 0 */
import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import chai , { expect } from 'chai';
import  sinonChai  from 'sinon-chai';
chai.use(sinonChai);

Enzyme.configure({ adapter: new Adapter() });

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe.only('test the app component', () => {
  let wrapper, app;

  beforeEach(() => {
    app = {
      title: 'Tapingo Tweets!'
    }
    wrapper = shallow(<App app={app}></App>);
  })

  it('render the correct title for the app', () => {
    expect(wrapper.find('.App-title').text()).to.be.equal(app.title);
  })
})

