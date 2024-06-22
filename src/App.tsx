import { useEffect } from "react";
import "./sakura.css";
import { Sakura } from "./sakura.js";

function App() {
  useEffect(() => {
    const sakura = new Sakura("#sakura-petals");
  }, []);
  return <div id="sakura-petals"></div>;
}

export default App;
