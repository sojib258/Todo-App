import ShowTaskItem from "../showTaskItem/ShowTaskItem";
import classes from "./ShowTask.module.css";
const ShowTaskSection = ({tasks, showItem, handleCheckbox, hadndleDeleteItem, handleEditTasks}) => {
    return (
        <div className={classes.showList}> 
            {tasks.length === 0 ? <p className={classes.noTask}>There is no task</p> : 
            showItem.map((obj) => <ShowTaskItem key={obj.id} obj={obj} handleCheckbox={handleCheckbox} hadndleDeleteItem={hadndleDeleteItem} handleEditTasks={handleEditTasks}  />)}
        </div>
    )
}

export default ShowTaskSection;






