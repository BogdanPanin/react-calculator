import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import "../scss/button.scss";

function Button({ children, Style, onClick, black, gray, orange }) {
  return (
    <button
      style={Style}
      onClick={onClick}
      className={classNames(
        "button",
        {
          button_black: black,
        },
        {
          button_orange: orange,
        },
        {
          button_gray: gray,
        }
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  Style: PropTypes.object,
  onClick: PropTypes.func,
  gray: PropTypes.bool,
  black: PropTypes.bool,
  orange: PropTypes.bool,
};

export default Button;
