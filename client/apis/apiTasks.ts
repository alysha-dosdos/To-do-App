import request from 'superagent'
import { Task, TaskData } from '../../models/tasks'

//to access the api in the server
const rootURL = '/api/v1/tasks'

//to get all tasks
export async function fetchTasks(): Promise<Task[]> {
  const res = await request.get(rootURL)
  return res.body
}

//to get task by id
export async function fetchTasksByID(id: number): Promise<Task> {
  const res = await request.get(`${rootURL}/${id}`)
  return res.body
}

//to add task
export async function postTask(newTask: TaskData) {
  await request.post(rootURL).send(newTask)
}

//to delete task
export async function deleteTask(id: number) {
  await request.delete(`${rootURL}/${id}`)
}
