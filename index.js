/** @jsx React.DOM */
var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var Routes = Router.Routes;
var Link = Router.Link;

var Hello = require('./components/Hello.js');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <ul>
          <li><Link to="user" params={{userId: "Bob"}}>Bob</Link></li>
          <li><Link to="user" params={{userId: "Matt"}} query={{age: 38}}>Matt With Query Params</Link></li>
          <li><Link to="user" params={{userId: "Ronn"}}>Ronn</Link></li>
        </ul>
        {this.props.activeRouteHandler()}
      </div>
    );
  }
});

var User = React.createClass({
  render: function(){
    var name = this.props.query.age ? this.props.params.userId + ' is ' + this.props.query.age : this.props.params.userId;
    //var age = this.props.query.age;

    return (
      <Hello name={name}/>
    );
  }
});


var routes = (
  <Routes>
    <Route handler={App}>
      <Route name="user" path="/:userId" handler={User}/>
    </Route>
  </Routes>
);


React.renderComponent(
  routes,
  document.body
);
