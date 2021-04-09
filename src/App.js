import Header from './components/Header'
import Tasks from  './components/Tasks'
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {id:1,
    text: 'Doctors Appointment',
    day: 'Feb 5th at 12:30pm',
    reminder: true},
    {id:2,
    text: 'Meeting',
    day: 'Feb 5th at 1:30pm',
    reminder: true},
    {id:3,
    text: 'Dinner with Family',
    day: 'Feb 6th at 8:30pm',
    reminder: true}
  ])

//Delete Tasks 
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder 
const toggleReminder = (id) => {
  setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task ))
}

  return (
    <div className="container">
    <Header title='Task Tracker' />
    {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete = {deleteTask} onToggle={toggleReminder}/>) : ('No Tasks to Show') }
    </div>
    
  );
}

export default App;
