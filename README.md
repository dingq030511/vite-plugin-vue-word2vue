# Vite插件，将docx格式word文档转换为vue组件

安装：

```shell
npm install vite-plugin-vue-word2vue -S
```

在vite.config.ts中引入

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import wordToVuePlugin from 'vite-plugin-vue-word2vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    wordToVuePlugin(),
  ],
})


```

在ts项目中添加声明文件，来避免引入的时候编辑器的错误提示

```ts
declare module '*.docx' {
  import type { ComponentOptions } from 'vue';
  const Component: ComponentOptions;
  export default Component;
}
```

在项目中使用docx格式组件

```html
<template>
  <TestPage />
</template>

<script setup lang="ts">
  import TestPage from './pages/TestPage.docx';
</script>

```

可选配置

```ts
{
    className: string; // 包裹元素的
    convertOptions: {...} // 参考mammoth.js convertHtml的Options选项
}
```
