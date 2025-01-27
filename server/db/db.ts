import connection from './connection'
import { Task } from '../../models/tasks'

const db = connection

export async function getAllTasks(): Promise<Task[]> {
  const tasks = await db('tasks').select()
  return tasks
}

export async function getTaskById(id: number): Promise<Task> {
  const task = await db('tasks')
    .select('id', 'name', 'details', 'completed')
    .where({ id })
    .first()
  return task as Task
}

//add function
export async function addNewTask(newTask: Task): Promise<Task> {
  return await db('tasks').insert(newTask)
}

//update function
export async function updateTask(updatedTask: Task): Promise<void> {
  const { id, name, details } = updatedTask
  return await db('tasks').where({ id }).update({ name, details })
}

//update if task completed
export async function updateTaskAsCompleted(id: number): Promise<void> {
  return await db('tasks').where({ id }).update('completed', true)
}

//delete function
export async function deleteTask(id: number): Promise<void> {
  await db('tasks').where({ id }).del()
}
