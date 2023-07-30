import Button from "../../ui/button/Button";
import InputField from "../../ui/input/InputField";
import classes from "./ShowTaskItem.module.css";
const ShowTaskItem = ({obj, handleCheckbox, hadndleDeleteItem, handleEditTasks}) => {
    return (
        <div key={obj.id} className={classes.showListItem}> 
            <div className={classes.showListTaskContent}>
                {obj.text}
            </div>
            <div className={classes.showListRightItems}>
                <div className={classes.inputLabel}> 
                    <label className={classes.label}>Complete</label>
                    <InputField type="checkbox" className="input__checkbox" checked={obj.completed} change={() => handleCheckbox(obj.id)}/>
                </div>
                <Button text="Delete" click={() => hadndleDeleteItem(obj.id)}/>
                <Button text="Edit" click={() => handleEditTasks(obj.id)}/>
            </div>
        </div>
    )
}

export default ShowTaskItem;




