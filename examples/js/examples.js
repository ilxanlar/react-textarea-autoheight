const React = require('react');
const ReactDOM = require('react/lib/ReactDOM');
const Textarea = require('./../../src/index');

const initBasicSample = () => {
  const el = document.getElementById('example');
  ReactDOM.render(<Textarea placeholder="Type your article here..."/>, el);
};

initBasicSample();
