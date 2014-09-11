/** @jsx React.DOM */
var React = require('react/addons');

var Hello = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

module.exports = Hello;
