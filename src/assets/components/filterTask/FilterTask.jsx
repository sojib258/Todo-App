import Button from "../ui/button/Button"
const FilterTask = ({tasks, handleVisibility}) => {
    return (
      <div> 
        {tasks.length > 0 && <div> 
            <Button className="mr" click={() => {handleVisibility("completed")}} text="Completed"/>
            <Button className="mr" click={() => {handleVisibility("incompleted")}} text="Incompleted"/>
            <Button className="mr" click={() => {handleVisibility("all")}} text="All"/>
        </div>}
      </div>
    )
}

export default FilterTask;


