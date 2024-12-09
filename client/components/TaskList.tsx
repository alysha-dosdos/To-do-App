import { useQuery } from '@tanstack/react-query'
import { fetchTasks } from '../apis/apiTasks'

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
                  <input className="toggle" type="checkbox" />
                  <label>{tasks.name}</label>

                  <button className="destroy"></button>
                </div>
                <input className="edit" value="Rule the web" />
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
