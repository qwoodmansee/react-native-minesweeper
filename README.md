# React Native Starter Kit [![Build Status](https://travis-ci.org/qwoodmansee/qw-react-native-starter-kit.svg?branch=master)](https://travis-ci.org/qwoodmansee/qw-react-native-starter-kit) [![All Contributors](https://img.shields.io/badge/all_contributors-2-orange.svg?style=flat-square)](#contributors)
This React Native starter kit is for spinning up applications quickly, while having a nice toolkit and modular enviroment to work with. While I like the default expo setup, I wanted some things set up out of the box (linting, updated testing libraries, storybook, etc.) when I go to setup projects in the future.

## Using this template
This repository uses Github's template feature, meanining you can simply click `Use This Template` above and create your own repository based on it. After this is done, you'll want to make a commit which changes the string `practiceapp` throughout the codebase to whatever you'd like your application to be named (they are all within configuration json files).

## Running Locally
This starter kit was built on top of the [Expo](https://expo.io/learn) toolset. You'll need an Android Simulator (we recommend downloading [Android Studio](https://developer.android.com/studio)) and/or an iOS Simulator (we recommend installing [XCode](https://developer.apple.com/xcode/)), but otherwise running the app locally is simple:

```bash
npm install expo-cli --global
cd your-cloned-repository
yarn start
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. All code is required to be tested in a dedicated file, and all lint rules are strongly enforced for code style consistency. Standalone commits with details messages are always appreciated.

## Development Tools
This project includes multiple project tools which can be helpful while developing. [Expo](https://expo.io/learn) allows you to easily run simulators from your command line, and allows for changing to other frameworks relatively easily. If you need custom native modules for iOS and Android, consider [ejecting](https://docs.expo.io/versions/v33.0.0/expokit/eject/).

For testing, [Jest](https://jestjs.io/docs/en/getting-started) combined with [native-testing-library](https://www.native-testing-library.com/docs/example) has been chosen for an easy way to write maintanable tests, and should be familar to anyone who has worked with Kent Dodd's testing library.

[Component Driven Development](https://blog.hichroma.com/component-driven-development-ce1109d56c8e) is supported via the inclusion of [Storybook](https://storybook.js.org/docs/basics/introduction/). Try `yarn storybook` (you'll probably need to restart your simulator after this,) to see examples of components in a standalone environment. This tool can be extremely powerful for building up a component without necessarily worrying about the context of a page, or needing a fully active environment. Look to any file with the suffix `-stories` for an example of how easy they can be to set up.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/mcgloneleviROOT"><img src="https://avatars3.githubusercontent.com/u/48258981?v=4" width="100px;" alt="mcgloneleviROOT"/><br /><sub><b>mcgloneleviROOT</b></sub></a><br /><a href="https://github.com/qwoodmansee/qw-react-native-starter-kit/commits?author=mcgloneleviROOT" title="Code">💻</a></td>
    <td align="center"><a href="https://github.com/qwoodmansee"><img src="https://avatars1.githubusercontent.com/u/10392661?v=4" width="100px;" alt="Quinton Woodmansee"/><br /><sub><b>Quinton Woodmansee</b></sub></a><br /><a href="#infra-qwoodmansee" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/qwoodmansee/qw-react-native-starter-kit/commits?author=qwoodmansee" title="Tests">⚠️</a> <a href="https://github.com/qwoodmansee/qw-react-native-starter-kit/commits?author=qwoodmansee" title="Code">💻</a></td>
  </tr>
</table>

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!
