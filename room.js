import { POST, localStorage, prompt } from './utils.js'

if (!localStorage.token) {
  console.log('run login.js first')
  process.exit(2)
}

// await POST('room/create/ordinary', { title: 'test', type: 'BigClass', beginTime: Date.now(), region: 'sg' })
await POST('room/list/all?page=1')
