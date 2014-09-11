/** @jsx React.DOM */
var React = require('react');
var Hello = require('./components/Hello.js');

React.renderComponent(
  <Hello name="Matt"/>,
  document.body
);
