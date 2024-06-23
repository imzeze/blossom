import { useEffect } from "react";
import "./sakura.css";
import { Sakura } from "./sakura.js";

function App() {
  useEffect(() => {
    const sakura = new Sakura("#sakura-petals");

    sakura.stop();

    let timer: NodeJS.Timeout | null = null;
    window.addEventListener("scroll", () => {
      sakura.start();

      if (timer !== null) {
        clearTimeout(timer);
      }
      timer = setTimeout(function () {
        sakura.stop(true); // scroll 하면 꽃잎 떨어짐
      }, 150);
    });
  }, []);

  return (
    <div style={{ height: "200vh" }}>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
        }}
        id="sakura-petals"
      ></div>
    </div>
  );
}

export default App;
