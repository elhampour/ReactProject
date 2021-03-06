$ = jQuery = require("jquery");
var ReactDOM = require("react-dom");
var React = require("react");
var Home = require("./components/homePage.jsx");
var About = require("./components/about/aboutPage.jsx");
var Header = require("./components/common/header.jsx");

( function (win) {
    'use strict';
    var App = React.createClass({
        render: function () {
            var Child;
            switch (this.props.route) {
                case 'about':
                    Child = About;
                    break;
                default :
                    Child = Home;
            }

            return (
                <div>
                    <Header/>
                    <Child />
                </div>
            );
        }
    });

    function render() {
        var route = win.location.hash.substr(1);
        ReactDOM.render(<App route={route}/>, app);
    };

    win.addEventListener("hashchange", render);
    render();
}(window))

