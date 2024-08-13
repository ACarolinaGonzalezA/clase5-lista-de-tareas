import React from 'react'

const TaskButton = ({task, onAddTask}) => {
  return (
    <button onClick={()=> onAddTask(task)}>{task}</button>
  )
}

export default TaskButton