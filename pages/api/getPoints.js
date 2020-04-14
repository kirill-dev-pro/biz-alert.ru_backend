import { Point } from '../../lib/db'

export default async (req, res) => {
  if (req.method !== 'GET') throw new Error('Wrong method')
  try {
    const points = await Point.find({})
    res.json(points)
  } catch (err) {
    console.error(err)
    throw new Error('Internal server error')
  }
}
