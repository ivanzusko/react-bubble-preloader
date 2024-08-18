/**
 * BubblePreloader
 */

import React, { CSSProperties, useEffect } from 'react';

const BubblePreloader = ({
    className,
    animation = {
        speed: 1.7,
    },
    bubble = {
        width: '1.5rem',
        height: '1.5rem',
    },
    colors = ['rgb(255, 170, 0)','rgb(255, 121, 0)','rgb(255, 80, 0)'],
    style,
}: {
    className?: string;
    animation?: {
        speed: number;
    };
    bubble?: {
        width?: string|number;
        height?: string|number;
    };
    colors?: string[];
    style?: CSSProperties;
}) => {
    useEffect(() => {
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

        addStyles(keyframesStyle);
    }, [])

    const addStyles = (style: string) => {
        const styleElement = document.createElement('style');
        let styleSheet;

        document.head.appendChild(styleElement);
        styleSheet = styleElement.sheet!;
        styleSheet.insertRule(style, styleSheet.cssRules.length);
    }

    const styles = {
        bubble: {
            width: bubble.width,
            height: bubble.height,
            display: 'inline-block',
            borderRadius: '50%',
            animation: `bouncedelay ${animation.speed}s ease-in-out infinite both`,
        },
        bubble1: {
            animationDelay: '-0.32s',
            backgroundColor: colors[0],
        },
        bubble2: {
            animationDelay: '-0.16s',
            backgroundColor: colors[1],
        },
        bubble3: {
            backgroundColor: colors[2],
        },
    };
    const combinedClassName = className ? `bubble-loader ${className}` : 'bubble-loader';

    return (
        <div
            className={combinedClassName}
            style={style}
        >
            <div style={Object.assign({}, styles.bubble, styles.bubble1)} className="bubble1"></div>
            <div style={Object.assign({}, styles.bubble, styles.bubble2)} className="bubble2"></div>
            <div style={Object.assign({}, styles.bubble, styles.bubble3)} className="bubble3"></div>
        </div>
    );
}

export default BubblePreloader;
