import PropTypes from "prop-types";
import classes from "./InputField.module.css";
const InputField = ({click, change, value, type, placeholder, checked, className}) => {
    return (
        <input checked={checked} onClick={click} onChange={change} value={value} className={classes.input + " " + classes[className]} type={type} placeholder={placeholder} />
    )
}
InputField.propTypes = {
    click: PropTypes.func, 
    change: PropTypes.func.isRequired, 
    value: PropTypes.string, 
    type: PropTypes.string.isRequired, 
    placeholder: PropTypes.string,
    checked: PropTypes.bool,
    className: PropTypes.string
}
export default InputField;











