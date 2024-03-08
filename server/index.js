import express from 'express'
import OS from 'os'

import { getSyncEncryptData, getAsyncEncryptData } from './crypto/index.js'

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/example/async', async(req, res) => {
    const start = new Date().getTime()

    await getAsyncEncryptData()

    const end = new Date().getTime() - start

    res.send(200, end)
})

app.get('/example/sync', (req, res) => {
    const start = new Date().getTime()

    getSyncEncryptData()

    const end = new Date().getTime() - start

    res.send(200, end)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  console.log('Number of threads:', OS.cpus().length)
  process.env.UV_THREADPOOL_SIZE=OS.cpus().length
})