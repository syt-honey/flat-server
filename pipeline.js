var base = `https://gitlab.com/api/v4/projects/${encodeURIComponent('flat-bot/flat-server')}`

var pipelines = await fetch(`${base}/pipelines`).then((r) => r.json())

for (var { id, iid, ref, status, updated_at, sha } of pipelines.slice(0, 3)) {
  var { name, user, duration } = await fetch(`${base}/pipelines/${id}`).then((r) => r.json())
  var { message } = await fetch(`${base}/repository/commits/${sha}`).then((r) => r.json())
  console.log(iid, ref, status, duration + ' seconds', updated_at)
  console.log(' '.repeat(String(iid).length), message.split(/\r|\n|\r\n/g)[0])
  console.log()
}
