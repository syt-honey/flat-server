import { g, POST, localStorage, prompt } from './utils.js'

if (localStorage.token) {
  var { name, token } = await POST('login', {}, {}, localStorage.token)
} else if (!process.env.PHONE) {
  console.log('set process.env.PHONE first')
  process.exit(2)
} else {
  const phone = '+86' + process.env.PHONE
  await POST('login/phone/sendMessage', { phone })
  const code = await prompt('give me your code: ')
  var { name, token } = await POST('login/phone', { phone, code: +code })
}
localStorage.token = token
console.log('hello,', name)
