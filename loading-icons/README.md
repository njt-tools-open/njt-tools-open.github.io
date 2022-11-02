## Loading Icons

<style>
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  /* max-width: 800px; */
  /* padding: 100px 20px; */
  margin: 0 auto;
}

.loading-item {
  padding: 20px;
}

.loading-item-box {
  box-sizing: content-box;
  width: 50px;
  padding: 20px;
  border: 1px solid #dfdfdf;
  border-radius: 3px;
}
</style>

<script>
  const {
    registerCircle1,
    registerCircle2,
    registerCircle3,
    registerCircle4,
    registerCircle5
  } = window.IconLoading;

  registerCircle1();
  registerCircle2();
  registerCircle3();
  registerCircle4();
  registerCircle5();
</script>

<div class="container">
  <div class="loading-item">
    <div class="loading-item-box">
      <loading-circle-1 />
    </div>
    <br>
    <span>loading-circle-1</span>
  </div>
  <div class="loading-item">
    <div class="loading-item-box">
      <loading-circle-2 />
    </div>
    <br>
    <span>loading-circle-2</span>
  </div>
  <div class="loading-item">
    <div class="loading-item-box">
      <loading-circle-3 />
    </div>
    <br>
    <span>loading-circle-3</span>
  </div>
  <div class="loading-item">
    <div class="loading-item-box">
      <loading-circle-4 />
    </div>
    <br>
    <span>loading-circle-4</span>
  </div>
  <div class="loading-item">
    <div class="loading-item-box">
      <loading-circle-5 />
    </div>
    <br>
    <span>loading-circle-5</span>
  </div>
</div>

## Component List

- @njt-tools-open/icon-loading-circle-1
- @njt-tools-open/icon-loading-circle-2
- @njt-tools-open/icon-loading-circle-3
- @njt-tools-open/icon-loading-circle-4
- @njt-tools-open/icon-loading-circle-5

## Installation

```sh
# install all loading icons
npm install @njt-tools-open/icon-loading
# install one laoding icon
npm install @njt-tools-open/icon-loading-circle-1
```

## Usage

```sh
npm install @njt-tools-open/icon-loading-circle-1 --save
```

### Register

```ts
import { register as registerIconLoadingCircle1 } from "@njt-tools-open/icon-loading-circle-1";

// effective for the first time only
registerIconLoadingCircle1();
```

### Html

```html
<script src="https://njt-tools-open.github.io/loading-icons/assets/index.js"></script>
<script>
  const { registerCircle1 } = window.IconLoading;

  registerCircle1();
</script>

<loading-circle-1 fills='["#efefef"]' />
```

### React

```sh
npm install @njt-tools-open/icon-loading-react-types -D
```

tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@njt-tools-open/icon-loading-react-types"]
  }
}
```

custom declaration

```ts
import { IntrinsicLoadingCircle } from "@njt-tools-open/icon-loading-react-types/typings/circle";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "custom-circle-1": IntrinsicLoadingCircle;
    }
  }
}

export {};
```

```jsx
const App = () => {
  return (
    <div>
      {/* use direct */}
      <loading-circle-1 />
      {/* custom tag name */}
      <loading-circle-1 />
    </div>
  );
};
```

### Solidjs

```sh
npm install @njt-tools-open/icon-loading-solidjs-types -D
```

tsconfig.json

```json
{
  "compilerOptions": {
    "types": ["@njt-tools-open/icon-loading-solidjs-types"]
  }
}
```

custom declaration

```ts
import "solid-js";
import { IntrinsicLoadingCircle } from "@njt-tools-open/icon-loading-solidjs-types/typings/circle";

declare module "solid-js" {
  namespace JSX {
    interface IntrinsicElements {
      "custom-loading-circle-1": IntrinsicLoadingCircle;
    }
  }
}

export {};
```

```jsx
const App = () => {
  return (
    <div>
      {/* use direct */}
      <loading-circle-1 />
      {/* custom tag name */}
      <custom-circle-1 />
    </div>
  );
};
```

## API

### function

| 名称     | 说明     | 类型                                                      | 参数说明                                          | 备注                                   |
| -------- | -------- | --------------------------------------------------------- | ------------------------------------------------- | -------------------------------------- |
| register | 注册组件 | (name?: string, options?: IntrinsicLoadingCircle) => void | name: 自定义标签名 <br> options: 全局组件默认配置 | 同个组件注册仅会生效一次, 注意使用时机 |

### attributes

| 参数  | 说明         | 类型     | 默认值      |
| ----- | ------------ | -------- | ----------- |
| width | 容器宽度     | string   | '100%'      |
| fills | 颜色填充列表 | string[] | ['#306fbe'] |
