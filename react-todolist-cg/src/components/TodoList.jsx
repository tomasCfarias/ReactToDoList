import React from 'react'
import { useState } from 'react'
function TodoList() {

    const [task, setTask] = useState([ "Play guitar", "Go to the gym" ]);
    const [newTask, setNewTask] = useState("");

    const [completedTasks,setCompletedTasks] = useState([])


    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addNewTask(){
        if(newTask.trim() !== ""){
            setTask(t => [...t, newTask])
            setNewTask("")
        }
    }



    function  finishTask (task){

        setCompletedTasks(prev =>
            prev.includes(task) ? prev.filter(t => t !== task) : [...prev, task]
        );

    };


  return (
    <>
        <div className='to-do-list'>
            <h1>To Do List CG</h1>
            <div>
                <input  
                    className="input" 
                    type="text" 
                    placeholder='Enter new task...'
                    value={newTask} 
                    onChange={handleInputChange}/>

                <button
                    className='add-btn'
                    onClick={addNewTask}>
                        Add
                </button>

            </div>

            <ol>
            {task.map((task, index) => 
                <li key={index}>
                    <span 
                    className={`text ${completedTasks.includes(task) ? "taskFinished" : ""}`}
                    onClick={() => finishTask(task)}
                    >
                        {task}
                    </span>
                </li>)}
            </ol>
        </div>
    </>
  )
}

export default TodoList
