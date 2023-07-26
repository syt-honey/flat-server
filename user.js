import { POST, localStorage, prompt } from './utils.js'

if (!localStorage.token) {
  console.log('run login.js first')
  process.exit(2)
}

await POST('user/rename', { name: 'MeowMeowMeow' })
