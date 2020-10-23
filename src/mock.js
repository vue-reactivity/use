export * from '@vue-reactivity/scope'

export function getCurrentInstance() {
  return undefined
}

export function onMounted(fn) { fn() }

export function onUnmounted(fn) { }
export function onBeforeUnmount(fn) { }

export function nextTick(fn) {
  fn()
  return Promise.resolve()
}

export function createApp() {}
