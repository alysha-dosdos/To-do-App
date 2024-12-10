// eslint-disable-next-line no-unused-vars
interface Prop {
  TaskID: number
}

import { useMutation, useQueryClient } from '@tanstack/react-query'
import { deleteTask } from '../apis/apiTasks'

function DeleteTodo(taskID: Prop) {
  const queryClient = useQueryClient()

  const deleteMutation = useMutation({
    mutationFn: (id: number) => deleteTask(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ['task'] }),
  })

  const handleDelete = () => {
    deleteMutation.mutate(taskID['TaskID'])
  }

  return (
    <>
      <div>
        <button
          className="destroy"
          onClick={handleDelete}
          aria-label="delete"
        />
      </div>
    </>
  )
}

export default DeleteTodo
