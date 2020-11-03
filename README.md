<p align='center'>
<img src='https://github.com/vue-reactivity/art/blob/master/svg/package-use.svg?raw=true' height='250'>
</p>

<p align='center'>
Utilities from <a href='https://github.com/antfu/vueuse'>VueUse</a> that works for <a href="https://github.com/vuejs/vue-next/tree/master/packages/reactivity"><code>@vue/reactivity</code></a>
</p>

<p align='center'>
  <a href="https://www.npmjs.com/package/@vue-reactivity/use"><img src="https://img.shields.io/npm/v/@vue-reactivity/use?color=43b883&label=" alt="npm"></a>
  <a href="https://bundlephobia.com/result?p=@vue-reactivity/use"><img src="https://img.shields.io/bundlephobia/minzip/@vue-reactivity/use?color=364a5e&label=" alt="npm bundle size"></a>
</p>

## Install

<pre>
npm i @vue-reactivity/<b>use</b>
</pre>

## Functions

> Functions are ported from [VueUse](https://github.com/antfu/vueuse) and this repo only contains the automation script, check the code and made changes in [VueUse](https://github.com/antfu/vueuse).

<!--FUNCTIONS_LIST_STARTS-->

  - [`asyncComputed`](https://vueuse.js.org/?path=/story/utilities--asynccomputed) - like [computed refs](https://composition-api.vuejs.org/api.html#computed)
  - [`useAsyncState`](https://vueuse.js.org/?path=/story/utilities--useasyncstate) - reactive async state
  - [`useDebounce`](https://vueuse.js.org/?path=/story/utilities--usedebounce) - debounce execution of a ref value
  - [`useDebounceFn`](https://vueuse.js.org/?path=/story/utilities--usedebouncefn) - debounce execution of a function
  - [`useRefHistory`](https://vueuse.js.org/?path=/story/utilities--userefhistory) - track the change history of a ref
  - [`useThrottle`](https://vueuse.js.org/?path=/story/utilities--usethrottle) - throttle changing of a ref value
  - [`useThrottleFn`](https://vueuse.js.org/?path=/story/utilities--usethrottlefn) - throttle execution of a function
  - [`biSyncRef`](https://vueuse.js.org/?path=/story/utilities--bisyncref) - two-way refs synchronization
  - [`controlledComputed`](https://vueuse.js.org/?path=/story/utilities--controlledcomputed) - explicitly define the deps of computed
  - [`extendRef`](https://vueuse.js.org/?path=/story/utilities--extendref) - add extra attributes to Ref
  - [`makeDestructurable`](https://vueuse.js.org/?path=/story/utilities--makedestructurable) - make isomorphic destructurable for object and array at the same time
  - [`syncRef`](https://vueuse.js.org/?path=/story/utilities--syncref) - keep target refs in sync with a source ref
  - [`tryOnMounted`](https://vueuse.js.org/?path=/story/utilities--tryonmounted) - safe `onMounted`
  - [`tryOnUnmounted`](https://vueuse.js.org/?path=/story/utilities--tryonunmounted) - safe `onUnmounted`
  - [`when`](https://vueuse.js.org/?path=/story/utilities--when) - promised one-time watch for ref changes

<!--FUNCTIONS_LIST_ENDS-->

## License

MIT
