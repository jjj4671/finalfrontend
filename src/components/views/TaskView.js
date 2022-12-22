import React from "react";
import { Link } from "react-router-dom";

const TaskView = (props) => {
  const { task, deleteTask } = props;
  return (
    <div>
      <h1>{task.description}</h1>
      {task.employee ? <h3>{task.employee.firstname + " " + task.employee.lastname}</h3> : <h3>Staff</h3>}
      <Link to={`/edittask/${task.id}`}>Edit task information</Link>
      <br />
      <Link to={`/tasks`}>View all tasks</Link>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskView;