# GET STARTED WITH FLOW

I recommended that you go to [the flow website](https://flow.org/en/docs/install/) to get started

## INSTALLATION

There's 4 way to choose, but I pick `Yarn` and `Babel`

as usual open terminal and type:

```bash
yarn init -y

yarn add -D @babel/core @babel/cli @babel/preset-flow
```

next is we make `.babelrc` for the presets, and type this inside `.babelrc`

```.babelrc
{
  "presets": ["@babel/preset-flow"]
}
```

also, make folder `src` that's going to be the place you code in `flow`

open `package.json` and add this

```json
{
  "main": "dist/index.js",
  "scripts": {
    "build": "babel src/ -d dist/",
    "prepublish": "yarn run build"
  }
}
```

Note: You’ll probably want to add a prepublish script that runs this transform as well so that it runs before you publish your code to the npm registry.

and do `yarn prepublish` first, after that do `yarn build`

next is to add another `devDepedency`

```bash
yarn add -D flow-bin
```

and do

```bash
yarn run flow init

yarn run flow

yarn run status
```

after this, on the `src` folder, create `index.js`

on top of `index.js` add this

```js
// @flow
```

and after you add some syntax in `src/index.js`, do `yarn build` to make the compiled, and to check the errors, do `yarn flow status` to check if there's an error.

### that's all folks
