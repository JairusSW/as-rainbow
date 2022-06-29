# 🌈 as-rainbow

[as-rainbow](https://github.com/JairusSW/as-rainbow) brings rainbows to your console--in AssemblyScript.

## Quickstart

In a AssemblyScript project, use a package manager to install [as-rainbow](https://github.com/JairusSW/as-rainbow).
```
npm i as-rainbow
yarn add as-rainbow
```

Now, use [as-rainbow](https://github.com/JairusSW/as-rainbow) inside of your `console.log()`

`assembly/index.ts ↴`
```js
import "wasi"
import { rainbow } from "as-rainbow/assembly"

console.log(rainbow.blue("Hello from as-rainbow! Time to make this terminal pop!"))
```

Build your `.wasm` binaries

```
npm run asbuild
```

Now, run `./build/debug.wasm` with any wasi-enabled runtime! Alternatively, use bindings to the DOM or NodeJS.

```diff
wasmtime ./build/debug.wasm
Hello from as-rainbow! Time to make this terminal pop!
^ This should be blue, but ofc, with markdown, we can't make it blue
```