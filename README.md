# React Bubble Preloader
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

<BubblePreloader
    bubble={{ width: '2rem', height: '2rem' }}
    animation={{ speed: 2 }}
    className="your-own-class__if-you-need-it"
    colors={['red', 'blue', 'yellow']}
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
