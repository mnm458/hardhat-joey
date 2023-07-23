# hardhat-example-plugin

Hardhat plugin for sending ERC-4337 UserOperations. 

[Hardhat](https://hardhat.org) plugin example.

## What

Hardhat Plugin for building & sending UserOperations providing a range of different methods to use & extending the base provider:
- buildUserOP()
- sendUserOP()
- HardhatBundlerProvider
- Hardhat available tasks:
    - buildOp
    - sendOp

## Installation


```bash
npm install hardhat-useroperation
```

Import the plugin in your `hardhat.config.js`:

```js
require("hardhat-useroperation");
```

Or if you are using TypeScript, in your `hardhat.config.ts`:

```ts
import "hardhat-useroperation";
```

## Required plugins

<_The list of all the required Hardhat plugins if there are any_>

- [@nomiclabs/hardhat-web3](https://github.com/nomiclabs/hardhat/tree/master/packages/hardhat-web3)

## Tasks


- Build an ERC4337 userOperation

```
npx hardhat buildOp
```
- Send an ERC4337 userOperation 

```
npx hardhat sendOp

```

## Environment extensions

<_A description of each extension to the Hardhat Runtime Environment_>

This plugin extends the Hardhat Runtime Environment by adding an `example` field
whose type is `ExampleHardhatRuntimeEnvironmentField`.

## Configuration

<_A description of each extension to the HardhatConfig or to its fields_>

This plugin extends the `HardhatUserConfig`'s `ProjectPathsUserConfig` object with an optional
`newPath` field.

This is an example of how to set it:

```js
module.exports = {
  paths: {
    newPath: "new-path",
  },
};
```

## Usage

<_A description of how to use this plugin. How to use the tasks if there are any, etc._>

There are no additional steps you need to take for this plugin to work.

Install it and access ethers through the Hardhat Runtime Environment anywhere
you need it (tasks, scripts, tests, etc).
