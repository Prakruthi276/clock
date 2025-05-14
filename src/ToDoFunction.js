import React, { useState } from 'react';

function ToDoFunction() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');
  const [editText, setEditText] = useState({}); // to store text while editing

  // Add Task
  const addTask = () => {
    if (taskInput.trim()) {
      setTasks([
        ...tasks,
        {
          id: Date.now(),
          text: taskInput,
          completed: false,
          isEditing: false,
        },
      ]);
      setTaskInput('');
    }
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Completed
  const toggleCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Start Editing
  const startEditing = (id, currentText) => {
    setEditText((prev) => ({ ...prev, [id]: currentText }));
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, isEditing: true } : task
      )
    );
  };

  // Save Task
  const editTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, text: editText[id], isEditing: false }
          : task
      )
    );
  };

  return (
    <div style={{ margin: '20px' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={taskInput}
        placeholder="Enter a task"
        onChange={(e) => setTaskInput(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {tasks.map((task) => (
          <li key={task.id} style={{ marginTop: '10px' }}>
            {task.isEditing ? (
              <>
                <input
                  type="text"
                  value={editText[task.id] || ''}
                  onChange={(e) =>
                    setEditText({ ...editText, [task.id]: e.target.value })
                  }
                />
                <button onClick={() => editTask(task.id)}>Save</button>
              </>
            ) : (
              <>
                <span
                  style={{
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'gray' : 'black',
                    marginRight: '10px',
                  }}
                >
                  {task.text}
                </span>
                <button onClick={() => toggleCompletion(task.id)}>
                  {task.completed ? 'Undo' : 'Complete'}
                </button>{' '}
                <button onClick={() => startEditing(task.id, task.text)}>
                  Edit
                </button>{' '}
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoFunction;
