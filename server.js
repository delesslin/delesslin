const app = require('express')()
const startServer = async () => {
  app.get('/', (req, res) => {
    res.send('Hello API!')
  })
  app.listen(3000, (e) => {
    if (e) console.error(e)
    console.log(`DeLesslin's Server listening on http://localhost:${3000}`)
  })
}
startServer()
