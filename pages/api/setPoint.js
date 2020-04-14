import { Point } from '../../lib/db'
import Debug from 'debug'
const debug = Debug('api:setPoint')

export default async (req, res) => {
  if (req.method !== 'POST') throw new Error('Wrong method')
  if (!req.body) throw new Error('No data')
  const point = new Point(req.body)
  try {
    await point.save()
    res.json(point.toJSON())
  } catch (err) {
    debug(err)
    throw new Error('Internal server error')
  }
}
