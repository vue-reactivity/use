import { promises as fs } from 'fs'
import axios from 'axios'

const categoriesNames = ['Utilities']

function getPackages(categories: any) {
  return Object.entries(categories)
    .filter(([key]) => categoriesNames.includes(key))
    .flatMap(([k, v]) => v)
    .filter((i: any) => !i.depreacted)
   
}

function getExports(categories: any) {
  return getPackages(categories)
    .map((i: any) => i.name)
    .join(', ')
}

async function updateREADME(data: any) { 
  const functions = [
    ...getPackages(data.core.categories),
    ...getPackages(data.shared.categories)
  ]
    .map(({ name, docs, description}: any) => `  - [\`${name}\`](${docs}) - ${description}`)
    .join('\n')
  
  
  let readme = await fs.readFile('README.md', 'utf-8')

  readme = readme.replace(/<!--FUNCTIONS_LIST_STARTS-->[\s\S]+?<!--FUNCTIONS_LIST_ENDS-->/m, `<!--FUNCTIONS_LIST_STARTS-->\n\n${functions}\n\n<!--FUNCTIONS_LIST_ENDS-->`)
  
  await fs.writeFile('README.md', readme, 'utf-8')
}

async function run() {
  const { data } = await axios.get(
    'https://raw.githubusercontent.com/antfu/vueuse/master/indexes.json'
  )

  await fs.writeFile(
    'src/index.ts',
    `export { ${getExports(data.core.categories)} } from '@vueuse/core'\n` +
    `export { ${getExports(data.shared.categories)} } from '@vueuse/shared'\n`,
    'utf-8'
  )

  updateREADME(data)
}

run()
