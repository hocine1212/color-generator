import { useState } from "react";
import Values from "values.js";
import SingleColor from "./SingleColor";
import Form from "./Form";

const App = () => {
  const [color, setColor] = useState("");

  const [list, setList] = useState(new Values("#f15025").all(10));

  return (
    <>
      <section className="container">
        <h4>color generator</h4>
        <Form color={color} setColor={setColor} setList={setList} />
      </section>
      <section className="colors">
        {list.map((color, index) => {
          return (
            <SingleColor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          );
        })}
      </section>
    </>
  );
};
export default App;
