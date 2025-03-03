## Background

`@swc/core` 1.10.15 made the default `es/minifier` pass set to 2:

- [Changelog](https://github.com/swc-project/swc/blob/main/CHANGELOG.md)
- [PR #10014](https://github.com/swc-project/swc/pull/10014)
- [Default passes change](https://github.com/swc-project/swc/pull/10014/files#diff-b40213014998d084ab9d7c55540e0646fb34d56f60e8d400edf83457c78bb5c8R370)

By default webpack's `TerserPlugin.swcMinify` will use these default options.
This change reduces the effectiveness of dead code elimination.

## The issue

Specifically with `@reduxjs/toolkit`, we have a lot of dangling functions and the internal immer dependencies are not tree-shaken properly. At pass 1 and 2, we can see dead bad code being included in the final build trying to call `null` as a function.

## Test Case

The test file being built is a minimal example that only creates a single action via `createAction` from Redux Toolkit:

```js
import { createAction } from "@reduxjs/toolkit";

const action = createAction("action/test");
console.log(action());
```

This simple example demonstrates how tree shaking in Redux Toolkit can be affected by the number of optimization passes. While this test case uses Redux Toolkit specifically, similar tree shaking issues might occur with other dependencies when using insufficient optimization passes. The underlying issue is that the minifier needs multiple passes to fully identify and eliminate unused code, especially with complex dependency trees.

```js
function C(e) {
  return function (t, r) {
    let n = (t) => {
      var n;
      if (isAction((n = r)) && Object.keys(n).every(s)) e(r.payload, t);
      else e(r, t);
    };
    return null(t) ? (n(t), t) : createNextState3(t, n); // 😬 wtf ?
  };
}
```

Setting the number of passes back to **3** removes this bad code.

Increasing the number of passes even further shows even more dead-code can be eliminated.
This threw us off in our extension as Firefox's review process will run linters on the submitted assets which included new warnings for the presence of this bad code.

## Setup

```sh
npm install
# will build from 1-10 passes
npm run build
```

## Results

You can look in dist/bundles[${passes}] to double check these results.

| PASSES | Bundle Size | Presence of badcode |
| ------ | ----------- | ------------------- |
| 1      | 10.8 KiB    | Yes                 |
| 2      | 4.59 KiB    | Yes                 |
| 3      | 2.71 KiB    | No                  |
| 4      | 2.17 KiB    | No                  |
| 5      | 1.97 KiB    | No                  |
| 6      | 1.86 KiB    | No                  |
| 7      | 1.86 KiB    | No                  |
| 8      | 1.86 KiB    | No                  |
| 9      | 1.86 KiB    | No                  |
| 10     | 1.86 KiB    | No                  |
