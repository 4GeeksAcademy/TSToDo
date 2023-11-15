import React, { useState } from 'react';
// import './../styles/index.css'; // Import the provided CSS file

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
        <h1>To Do's</h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a task"
          onKeyDown={(e) => {
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
              <li key={index} onMousePress={() => handleDeleteTask(index)}>
                {task}
                <span
                  className="delete-icon"
                  onClick={() => handleDeleteTask(index)}
                >
                  &#10006;
                </span>
              </li>
            ))}
            <div className='task-length'> items left {tasks.length}</div>
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
