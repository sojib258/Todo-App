import PropTypes from "prop-types";
import classes from "./Button.module.css";
const btnVariant = {
    black: {
        backgroundColor: "#000",
        color: "#fff"
    },
    white: {
        backgroundColor: "#fff",
        color: "#000"
    },
    success: {
        backgroundColor: "rgb(0, 159, 0)",
        color: "#fff"
    },
    warning: {
        backgroundColor: "rgb(255, 255, 15)",
        color: "#000"
    },
    danger: {
        backgroundColor: "red",
        color: "white"
    }
}
const Button = ({click, variant, text, className}) => {
    const btnCustomStyle = btnVariant[variant]
    return (
        <button style={btnCustomStyle} onClick={click} className={classes.btn + " " + classes[className]}>{text}</button>
    )
}

Button.propTypes = {
    click: PropTypes.func.isRequired,
    variant: PropTypes.object
}
export default Button;

















