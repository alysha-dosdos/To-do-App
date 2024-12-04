import request from 'superagent'
import { Task } from '../../models/tasks'

//to access the api in the server
const rootURL = '/api/v1/tasks'

//to get all tasks
export async function fetchTasks(): Promise<Task[]> {
  const res = await request.GET(rootURL)
  return res.body
}

//to get task by id
export async function fetchTasksByID(id: number): Promise<Task> {
  const res = await request.GET(`${rootURL}/${id}`)
  return res.body
}

//to add task
export async function postTask(newTask: Task) {
  await request.post(rootURL).send(newTask)
}

//to delete task
export async function deleteTask(id: number) {
  await request.DELETE(`${rootURL}/${id}`)
}
