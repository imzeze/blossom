import { useEffect } from "react";
import "./sakura.css";
import { Sakura } from "./sakura.js";
import styled from "styled-components";

function App() {
  useEffect(() => {
    const sakura = new Sakura("#sakura-petals");

    sakura.start();

    let timer: NodeJS.Timeout | null = null;
    const onScroll = () => {
      sakura.start();

      if (timer !== null) {
        clearTimeout(timer);
      }

      timer = setTimeout(function () {
        sakura.stop(true);
      }, 150);
    };

    window.addEventListener("scroll", onScroll);
  }, []);
  return (
    <div style={{ height: "200vh" }}>
      <Div id="sakura-petals"></Div>
    </div>
  );
}

export default App;

const Div = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transform: translate(-20px, -20px);
`;
