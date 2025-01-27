// eslint-disable-next-line no-unused-vars
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'
import { postTask } from '../apis/apiTasks'
import { TaskData } from '../../models/tasks'

function AddTodo() {
  const [newTask, setNewTask] = useState('')
  const queryClient = useQueryClient()

  const addMutation = useMutation({
    mutationFn: (task: TaskData) => postTask(task),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['task'] }),
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(event.target.value)
  }

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    addMutation.mutate({ name: newTask, details: '', completed: false })
    setNewTask('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label htmlFor="name">Put to-do below</label>
        <input
          className="new-todo"
          placeholder="What to do next?"
          // autoFocus={true}
          type="text"
          id="name"
          name="name"
          onChange={handleChange}
          value={newTask}
        />
      </form>
    </>
  )
}

export default AddTodo
