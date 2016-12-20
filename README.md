# React Bubble Preloader
React component which provide nice and simple preloader

## Installation
Just run
```javascript
npm i react-bubble-preloader
```
or (if you are using __Yarn__)
```javascript
yarn add react-bubble-preloader --dev
```

## Usage
```javascript
import BubblePreloader from 'react-bubble-preloader';

<BubblePreloader
    bubble={{width:'2rem',height:'2rem'}}
    animation={{speed:2}}
    colors={['red','blue','yellow']}
/>
```

## Customization
All props are not required, only if you want to customize:

Property | Type | Description
:---|:---|:---
`bubble` | object | with `width` and `height` keys, which accept any kind of size units
`animation` | object | with `speed` key
`color` | array | which accept three colors which will be used one by one as background colors of the bubbles

### P.S.
Huge appreciation to [JULIAN ĆWIRKO](http://julian.io/) for his [react-npm-boilerplate](https://github.com/juliancwirko/react-npm-boilerplate)
