(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.index = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var BubblePreloader = function (_React$Component) {
        _inherits(BubblePreloader, _React$Component);

        function BubblePreloader() {
            _classCallCheck(this, BubblePreloader);

            return _possibleConstructorReturn(this, (BubblePreloader.__proto__ || Object.getPrototypeOf(BubblePreloader)).apply(this, arguments));
        }

        _createClass(BubblePreloader, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                var keyframesStyle = '\n            @keyframes bouncedelay {\n                0%, 80%, 100% {\n                    -webkit-transform: scale(0);\n                    -ms-transform: scale(0);\n                    transform: scale(0);\n                }\n                40% {\n                    -webkit-transform: scale(1);\n                    -ms-transform: scale(1);\n                    transform: scale(1);\n                }\n            }\n        ';
                this.addStyles(keyframesStyle);
            }
        }, {
            key: 'addStyles',
            value: function addStyles(style) {
                var styleElement = document.createElement('style');
                var styleSheet = null;

                document.head.appendChild(styleElement);
                styleSheet = styleElement.sheet;
                styleSheet.insertRule(style, styleSheet.cssRules.length);
            }
        }, {
            key: 'render',
            value: function render() {
                var styles = {
                    bubble: {
                        width: this.props.bubble.width,
                        height: this.props.bubble.height,
                        display: 'inline-block',
                        borderRadius: '50%',
                        animation: 'bouncedelay ' + this.props.animation.speed + 's ease-in-out infinite both'
                    },
                    bubble1: {
                        animationDelay: '-0.32s',
                        backgroundColor: this.props.colors[0]
                    },
                    bubble2: {
                        animationDelay: '-0.16s',
                        backgroundColor: this.props.colors[1]
                    },
                    bubble3: {
                        backgroundColor: this.props.colors[2]
                    }
                };

                return _react2.default.createElement(
                    'div',
                    { className: 'bubble-loader' },
                    _react2.default.createElement('div', { style: Object.assign({}, styles.bubble, styles.bubble1), className: 'bubble1' }),
                    _react2.default.createElement('div', { style: Object.assign({}, styles.bubble, styles.bubble2), className: 'bubble2' }),
                    _react2.default.createElement('div', { style: Object.assign({}, styles.bubble, styles.bubble3), className: 'bubble3' })
                );
            }
        }]);

        return BubblePreloader;
    }(_react2.default.Component);

    ;

    BubblePreloader.defaultProps = {
        animation: {
            speed: 1.7
        },
        bubble: {
            width: '1.5rem',
            height: '1.5rem'
        },
        colors: ['rgb(255, 170, 0)', 'rgb(255, 121, 0)', 'rgb(255, 80, 0)']
    };

    exports.default = BubblePreloader;
});