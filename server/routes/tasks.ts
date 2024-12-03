import { Router } from 'express'
import * as db from '../db/db.ts'

const router = Router()

//GET 'api/v1/tasks'
router.get('/', async (req, res) => {
  try {
    const tasks = await db.getAllTasks()
    res.json(tasks)
  } catch (error) {
    res.sendStatus(500)
  }
})

//GET 'api/v1/tasks/:id'

//POST 'api/v1/tasks'

//DEL 'api/v1/tasks/:id'

export default router
