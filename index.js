const express = require('express')
const { Point } = require('./lib/db')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

const app = express()
app.get('/getPoints', async (req, res) => {
  if (req.method !== 'GET') return res.status(500).send('Wrong method')
  try {
    const points = await Point.find({})
    res.header('Access-Control-Allow-Origin', '*')
    res.json(points)
  } catch (err) {
    console.error(err)
    res.status(500).send('Internal server error')
  }
})
app.post('/setPoint', async (req, res) => {
  if (req.method !== 'POST') return res.status(500).send('Wrong method')
  if (!req.body) return res.status(500).send('No data')
  const point = new Point(req.body)
  try {
    await point.save()
    res.header('Access-Control-Allow-Origin', '*')
    res.status(200).json(point.toJSON())
  } catch (err) {
    console.error(err)
    return res.status(500).send('Internal server error')
  }
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
