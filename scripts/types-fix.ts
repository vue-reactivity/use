import { promises as fs } from 'fs'
import fg from 'fast-glob'

export async function fixTypingOutput() {
  const files = await fg(['dist/*.d.ts'], {
    onlyFiles: true,
  })

  for (const f of files) {
    const raw = await fs.readFile(f, 'utf-8')
    const changed = raw.replace(/vue-demi/g, '@vue-reactivity/scope')
    await fs.writeFile(f, changed, 'utf-8')
  }
}

fixTypingOutput()
