import { useState } from "react";
import "./App.css";
import Button from "./Components/Button";

function App() {
  const [color, setColor] = useState("white");

  const changeColor = (newColor) => {
    setColor(newColor);
  }

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center items-center h-full inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Button colorName="Red" changeColor={changeColor}/>
          <Button colorName="Blue" changeColor={changeColor}/>
          <Button colorName="Green" changeColor={changeColor}/>
          <Button colorName="Pink" changeColor={changeColor}/>
          <Button colorName="Yellow" changeColor={changeColor}/>
          <Button colorName="Magenta" changeColor={changeColor}/>
          <Button colorName="Purple" changeColor={changeColor}/>
        </div>
      </div>
    </div>
  );
}

export default App;
