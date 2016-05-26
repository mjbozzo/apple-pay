var React = require('react'),
    RouterMixin = require('react-mini-router').RouterMixin,
    ReactCSSTransitionGroup = require('react-addons-css-transition-group'),
    Home = require('./components/home.jsx');

require('../styles/main.css');

module.exports = React.createClass({
    mixins: [RouterMixin, ],
    routes: {
        '/': 'home'
    },
    render: function () {
        return (
            <ReactCSSTransitionGroup
                transitionName="fade"
                transitionLeave={false}
                transitionEnterTimeout={ 500 }
                transitionLeaveTimeout={ 500 }>
                { this.renderCurrentRoute() }
            </ReactCSSTransitionGroup>
        );
    },
    home: function () {
        return <Home key={ this.state.path }></Home>;
    }
});
