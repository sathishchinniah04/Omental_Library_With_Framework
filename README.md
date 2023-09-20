# react-native-omental-framework

Omental library

## Installation

```sh
npm install react-native-omental-framework
```

## Usage

```js
import { DailyChallenge, loadGame } from 'react-native-omental-framework';

// ...

// To call the the spin and win directly use loadGame function
loadGame();


// To display the daily challenges view use <DailyChallenge> jsx tag
<DailyChallenge />


// Daily Challenges view has 3 onClick functions for the three games diplayed, current for spin and win it will automatically redirects to spin and win game. Please find the example that use the onClick functions
<DailyChallenge
    onSpinClick={() => console.log("spin and win clicked")}
    onLuckyClick={() => console.log("lucky lottery clicked")}
    onShakeClick={() => console.log("shake and win clicked")}
/>
```

## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
