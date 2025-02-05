# **Forked from: Vue Tailwind Screens Helper** <!-- omit in toc -->

[![](https://img.shields.io/npm/v/vue-tailwind-screens-helper.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/vue-tailwind-screens-helper)
[![](https://img.shields.io/github/license/ewilan-riviere/vue-tailwind-screens-helper.svg?style=flat-square&color=f05032&logo=git&logoColor=ffffff)](https://github.com/ewilan-riviere/vue-tailwind-screens-helper/blob/master/LICENSE)

[![nodejs](https://img.shields.io/static/v1?label=Node.js&message=v12.16&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en/)
[![vue.js](https://img.shields.io/static/v1?label=Vue.js&message=v2.6&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)
[![tailwindcss](https://img.shields.io/static/v1?label=Tailwind%20CSS&message=v2.0&color=38B2AC&style=flat-square&logo=tailwind-css&logoColor=ffffff)](https://tailwindcss.com)

Display an helper at th left bottom corner in **development mode**, this helper display current breakpoint (xs, sm, md, lg or xl) with icon and exact window width in pixels.

**You can click on it to hide it**

![vue-tailwind-screens-helper](./example/vue-tailwind-screens-helper.jpg)

- [**I. Download package**](#i-download-package)
- [**II. Setup**](#ii-setup)
  - [*II. a. With Vue-CLI*](#ii-a-with-vue-cli)
  - [*II. b. With Nuxt.js*](#ii-b-with-nuxtjs)
- [**III. Usage**](#iii-usage)
  - [*III. a. With Vue-CLI*](#iii-a-with-vue-cli)
  - [*III. b. With Nuxt.js*](#iii-b-with-nuxtjs)
- [**IV. API**](#iv-api)
- [**V. Tailwind breakpoints**](#v-tailwind-breakpoints)
- [**License & example**](#license--example)

## **I. Download package**

Install it with Yarn or NPM

```bash
yarn add -D lmuzquiz-vue-tailwind-screens-helper
```

**OR**

```bash
npm i lmuzquiz-vue-tailwind-screens-helper --save-dev
```

---

## **II. Setup**

### *II. a. With Vue-CLI*

Import it, ES6 way, in `main.js` / `app.js` file

```js
import TailwindHelper from 'lmuzquiz-vue-tailwind-screens-helper'

Vue.use(TailwindHelper)
```

### *II. b. With Nuxt.js*

Create a `plugins`: `plugins/lmuzquiz-vue-tailwind-screens.client.js` notice that the .client part tells nuxt to run the plugin on the client only

```js
import Vue from 'vue'
import TailwindHelper from 'lmuzquiz-vue-tailwind-screens-helper'

Vue.use(TailwindHelper)
```

Import plugin into `nuxt.config.js`

```js
plugins: [
  // ...
  { src: '~/plugins/vue-tailwind-screens.client'},
],
```

---

## **III. Usage**

### *III. a. With Vue-CLI*

Use it in a `.vue` file, like `App.vue`

```vue
<template>
  <div>
    <tailwind-helper />
  </div>
</template>
```

### *III. b. With Nuxt.js*

Use it in a `vue` file, like `layouts/default.vue`, don't forget to add `client-only` to setup it properly.

```vue
<template>
  <client-only>
      <tailwind-helper />
    </client-only>
</template>
```

---

## **IV. API**

| Props  | Type    | Default value | Description                  |
| ------ | ------- | ------------- | ---------------------------- |
| sneak  | Boolean | false         | Display helper in sneak mode |
| pixels | Boolean | true          | Display pixels width         |

---

## **V. My opinionated Tailwind breakpoints**

These are my opinionated breakpoints, you can change Tailwind CSS breakpoints into `tailwind.config.js`, helper will adapt it-self when breakpoints change.

```js
module.exports = {
  theme: {
    // ...
    extend: {
      // ...
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '992px',
        xl: '1280px',
        '2xl': '1440px',
        '3xl': '1680px',
        '4xl': '1920px',
        '5xl': '2048px',
        '6xl': '2160px',
        '7xl': '2560px',
      },
    },
  },
}
```

---

## **License & example**

**MIT** &copy; [**@ewilan-riviere**](https://github.com/ewilan-riviere)

If you want to test directly this plugin with this repo, clone it, install `npm i @vue/cli-service-global --dev` or ` yarn add @vue/cli-service --dev  ` (might need to use sudo) and then serve application with `yarn dev`
