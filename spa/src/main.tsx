import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { matchLocation, BrowserRouter } from "enrouter";

import "./index.css";

async function main() {
  const matches = await matchLocation(window.location.pathname);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter matches={matches} />
    </StrictMode>
  );
}

main();
