import { promises as fs } from 'fs'
import axios from 'axios'

const categories = [
  'Utilities',
]

async function run() {
  const { data } = await axios.get('https://raw.githubusercontent.com/antfu/vueuse/master/indexes.json')

  const functions = Object
    .entries(data.core.categories)
    .filter(([key]) => categories.includes(key))
    .flatMap(([k, v]) => v)
    .filter((i: any) => !i.depreacted)
    .map((i: any) => i.name)
    .join(', ')

  await fs.writeFile('src/index.ts', `export { ${functions} } from '@vueuse/core'\n`)
}

run()
