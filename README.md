# React Bubble Preloader

[![NPM Version](https://img.shields.io/npm/v/react-bubble-preloader.svg?style=for-the-badge)](https://www.npmjs.com/package/react-bubble-preloader)
[![](https://img.shields.io/npm/dt/react-bubble-preloader.svg?style=for-the-badge)](https://www.npmjs.com/package/react-bubble-preloader)
[![](https://img.shields.io/github/issues/ivanzusko/react-bubble-preloader.svg?style=for-the-badge)](https://github.com/ivanzusko/react-bubble-preloader/issues)
[![](https://img.shields.io/github/issues-closed-raw/ivanzusko/react-bubble-preloader.svg?style=for-the-badge)](https://github.com/ivanzusko/react-bubble-preloader/issues)
[![](https://img.shields.io/npm/l/react-bubble-preloader.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)

React component which provides nice and simple preloader


## Demo
https://ivanzusko.github.io/react-bubble-preloader/

## Installation
Just run
```javascript
npm i react-bubble-preloader
```
or (if you are using __Yarn__)
```javascript
yarn add react-bubble-preloader
```

## Usage
```javascript
import BubblePreloader from 'react-bubble-preloader';

// Basic usage with Zero configuration
<BubblePreloader />

// You can add any of those props:
<BubblePreloader
    bubble={{ width: '2rem', height: '2rem' }}
    animation={{ speed: 2 }}
    className="your-own-class__if-you-need-it"
    colors={['red', 'blue', 'yellow']}
    style={{ border: 'solid 1px red' }}
/>
```

## Customization
All props are not required, only if you want to customize:

```ts
{
  className?: string // Accepts your custom class to the preloader, but bubbles still will have classes bubble1 , bubble2 , bubble3
  animation?: {
    speed: number
  }
  bubble?: { // Allows to change the size of the bubbles
    width?: string | number
    height?: string | number
  }
  colors?: string[] // Accepts three colors which will be used one by one as background colors of the bubbles
  style?: CSSProperties // Accepts normal object with styles as it could be done with normal DOM elements.
}
```

## CHANGELOG
[CHANGELOG.md](https://github.com/ivanzusko/react-bubble-preloader/blob/main/CHANGELOG.md)

### P.S.
Huge appreciation to [JULIAN ĆWIRKO](http://julian.io/) for his [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)
