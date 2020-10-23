import dts from 'rollup-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import alias from '@rollup/plugin-alias'

export default [
  {
    input: 'src/index.ts',
    external: ['@vue-reactivity/scope'],
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
      },
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
    ],
    plugins: [
      alias({
        entries: [{ find: 'vue-demi', replacement: './src/mock.js' }],
      }),
      nodeResolve(),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.d.ts',
        format: 'es',
      },
    ],
    plugins: [dts()],
  },
]
