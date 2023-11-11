import React, { useState } from 'react';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="todo-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              handleAddTask();
            }
          }}
        />
        <button onClick={handleAddTask}>Add</button>
        {tasks.length === 0 ? (
          <div className="no-tasks">No tasks, add a task</div>
        ) : (
          <ul>
            {tasks.map((task, index) => (
              <li key={index} onMouseEnter={() => handleDeleteTask(index)}>
                {task}
                <span
                  className="delete-icon"
                  onClick={() => handleDeleteTask(index)}
                >
                  &#10006;
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
