import PropTypes from "prop-types";

function Random({randomColor}) {
  return (
    <>
      <button
        onClick={() => randomColor()}
        className="outline-none px-5 py-2 rounded-full text-white shadow-lg text-[1rem] font-bold"
        style={{ backgroundColor: "black" }}
      >
        Random
      </button>
    </>
  );
}

Random.propTypes = {
  randomColor: PropTypes.func.isRequired,
};

export default Random;
