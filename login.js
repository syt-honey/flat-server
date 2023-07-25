import { g, POST, localStorage, prompt } from './utils.js'

if (localStorage.token) {
  await POST('login', {}, {}, localStorage.token)
} else if (!process.env.PHONE) {
  console.log('set process.env.PHONE first')
} else {
  const phone = '+86' + process.env.PHONE
  await POST('login/phone/sendMessage', { phone })
  const code = await prompt('give me your code: ')
  await POST('login/phone', { phone, code: +code })
}
