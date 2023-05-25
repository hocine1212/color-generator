import { useState } from "react";
import Values from "values.js";

const Form = ({ color, setColor, setList }) => {
  const [error, setError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      let colors = new Values(color).all(10);
      setList(colors);
    } catch (error) {
      setError(true);
      console.log(error);
    }
  };
  return (
    <form className="color-form" onSubmit={handleSubmit}>
      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        placeholder="#f15025"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className={`${error ? "error" : null}`}
      />
      <button
        type="submit"
        className="submit-btn"
        style={{ backgroundColor: color }}
      >
        submit
      </button>
    </form>
  );
};
export default Form;
