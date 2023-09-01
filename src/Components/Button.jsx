import PropTypes from "prop-types";

function Button({ colorName, changeColor }) {
  return (
    <>
      <button
        onClick={() => changeColor(colorName)}
        className="outline-none px-5 py-2 rounded-full text-white shadow-lg text-[1rem] font-bold"
        style={{ backgroundColor: colorName }}
      >
        {colorName}
      </button>
    </>
  );
}

Button.propTypes = {
  colorName: PropTypes.string.isRequired,
  changeColor: PropTypes.func.isRequired,
};

export default Button;
