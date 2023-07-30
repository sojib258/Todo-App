import { useState } from "react";
import classes from "./App.module.css";
import CreateTask from "./assets/components/createTask/CreateTask";
import FilterTask from "./assets/components/filterTask/FilterTask";
import ShowTaskSection from "./assets/components/showTask/showTaskSection/ShowTaskSection";

// for generate unique id by generator
function * generateId(){
  let id = 0
  while(true){
    yield id++
  }
}
const getId = generateId()

const App = () => {
  const [input, setInput] = useState("Add Task..")
  const [tasks, setTasks]  = useState([])
  const [visibility, setVisibility] = useState("all")

  // Adding object in tasks array
  const task = {
    id: getId.next().value,
    text: input,
    date: new Date(),
    completed: false
  }

  // handle input fields for onChange 
  const handleInputChange = (e) => {
    setInput(e.target.value)
  }

  // handle input fields for onClick
  const handleInputClick = () => {
    setInput("")
  }

  // handle create task
  const handleTask = () => {
    if(input === ""){
      alert("Enter Valid Text!")
      return;
    }
    setTasks([task, ...tasks])
    setInput("")
  }

  // handle delete task
  const hadndleDeleteItem = (id) => {
    const deleteItem = tasks.findIndex(obj => {
      if(obj.id === id){
        return obj
      }
    })
    tasks.splice(deleteItem, 1)
    setTasks([...tasks])
  }

  // handle edit task
  const handleEditTasks = (id) => {
    const editItem = tasks.find(obj => {
      if(obj.id === id){
        return obj
      }
    })
    editItem.text = prompt("Enter new task..")
    if(editItem.text === ""){
      alert("Enter valid text")
      return;
    }
    setTasks([...tasks])
  }

  // handle input filed for checkbox
  const handleCheckbox = (id) => {
    const checkItem = tasks.map(obj => {
      if(obj.id === id){
        obj.completed = !obj.completed
      }
      return obj
    })
    setTasks(checkItem)
  }

  // handle visibility for filter task
  const handleVisibility = (text) => {
    setVisibility(text)
  }

  // handle visibility for filter task
  const handleShowList = () => {
    if(visibility === "completed") return tasks.filter(obj => obj.completed)
    if(visibility === "incompleted") return tasks.filter(obj => !obj.completed)
    return tasks;
  }

  return (
    <div className={classes.todo}> 
      <CreateTask handleInputClick={handleInputClick} handleInputChange={handleInputChange} handleTask={handleTask} value={input}/>
      <ShowTaskSection tasks={tasks} showItem={handleShowList()} handleCheckbox={handleCheckbox} hadndleDeleteItem={hadndleDeleteItem} handleEditTasks={handleEditTasks}/>
      <FilterTask tasks={tasks} handleVisibility={handleVisibility}/>
    </div>
  )
}

export default App;