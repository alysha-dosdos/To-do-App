import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../apis/apiTasks'
import DeleteTodo from './DeleteTodo'

export default function TaskList() {
  const {
    data: tasks,
    isPending,
    isError,
  } = useQuery({ queryKey: ['task'], queryFn: fetchTasks })

  if (isError) {
    return <h2>Error</h2>
  }

  if (isPending) {
    return <h2>Loading..</h2>
  }

  return (
    <>
      <section>
        <div>
          <ul className="todo-list">
            {tasks.map((tasks) => (
              <li key={tasks.id}>
                <div className="view">
                  <input
                    id={`view-${tasks.id}`}
                    className="toggle"
                    type="checkbox"
                  />
                  <label htmlFor={`view-${tasks.id}`}>{tasks.name}</label>
                  <DeleteTodo TaskID={tasks.id} />
                  {/* <button className="destroy" onClick={handleDelete}></button> */}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
