/**
 * BubblePreloader
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    className: PropTypes.string,
    colors: PropTypes.array,
    bubble: PropTypes.object,
    animation: PropTypes.object,
};

class BubblePreloader extends Component {
    componentDidMount() {
        const keyframesStyle = `
            @keyframes bouncedelay {
                0%, 80%, 100% {
                    -webkit-transform: scale(0);
                    -ms-transform: scale(0);
                    transform: scale(0);
                }
                40% {
                    -webkit-transform: scale(1);
                    -ms-transform: scale(1);
                    transform: scale(1);
                }
            }
        `;
        this.addStyles(keyframesStyle);
    }
    addStyles(style) {
        const styleElement = document.createElement('style');
        let styleSheet = null;

        document.head.appendChild(styleElement);
        styleSheet = styleElement.sheet;
        styleSheet.insertRule(style, styleSheet.cssRules.length);
    }
    render() {
        const styles = {
            bubble: {
                width: this.props.bubble.width,
                height: this.props.bubble.height,
                display: 'inline-block',
                borderRadius: '50%',
                animation: `bouncedelay ${this.props.animation.speed}s ease-in-out infinite both`,
            },
            bubble1: {
                animationDelay: '-0.32s',
                backgroundColor: this.props.colors[0],
            },
            bubble2: {
                animationDelay: '-0.16s',
                backgroundColor: this.props.colors[1],
            },
            bubble3: {
                backgroundColor: this.props.colors[2],
            },
        };
        const combinedClassName = this.props.className ? `bubble-loader ${this.props.className}` : 'bubble-loader';

        return (
            <div className={combinedClassName}>
                <div style={Object.assign({}, styles.bubble, styles.bubble1)} className="bubble1"></div>
                <div style={Object.assign({}, styles.bubble, styles.bubble2)} className="bubble2"></div>
                <div style={Object.assign({}, styles.bubble, styles.bubble3)} className="bubble3"></div>
            </div>
        );
    }
};

BubblePreloader.propTypes = propTypes;
BubblePreloader.defaultProps = {
    animation: {
        speed: 1.7,
    },
    bubble: {
        width: '1.5rem',
        height: '1.5rem',
    },
    colors: ['rgb(255, 170, 0)','rgb(255, 121, 0)','rgb(255, 80, 0)'],
}

export default BubblePreloader;
