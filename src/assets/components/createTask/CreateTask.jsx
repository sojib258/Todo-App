import PropTypes from "prop-types"
import Button from "../ui/button/Button"
import InputField from "../ui/input/InputField"
const CreateTask = ({handleInputClick, handleInputChange, handleTask, value }) => {
    return (
        <> 
            <InputField className="input__text" click={handleInputClick} change={(e) => handleInputChange(e)} value={value} type="text" placeholder="Enter your task name.."/>
            <Button text="Add" click={() => handleTask()}/>
        </>
    )
}

CreateTask.propTypes = {
    handleInputClick: PropTypes.func.isRequired,
    handleInputChange: PropTypes.func.isRequired,
    handleTask: PropTypes.func.isRequired
}
export default CreateTask




