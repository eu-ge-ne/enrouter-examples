import { Outlet, useLink } from "enrouter";

import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "./styles.css";

export default {
  Root
};

function Root() {
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <ul className="menu">
        <li>
          <a {...useLink("/")}>Home</a>
        </li>
        <li>
          <a {...useLink("/incr")}>Increment</a>
        </li>
        <li>
          <a {...useLink("/decr")}>Decrement</a>
        </li>
      </ul>
      <div className="card">
        <Outlet />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
