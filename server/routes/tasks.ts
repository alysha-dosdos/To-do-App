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
router.get('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    const task = await db.getTaskById(id)
    res.json(task)
  } catch (error) {
    res.sendStatus(500)
  }
})

//POST 'api/v1/tasks'
router.post('/', async (req, res) => {
  const newTask = req.body
  try {
    await db.addNewTask(newTask)
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
})

//DEL 'api/v1/tasks/:id'
router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  try {
    await db.deleteTask(id)
    res.sendStatus(200)
  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
})

//PATCH 'api/v1/tasks/completed/:id'

export default router
