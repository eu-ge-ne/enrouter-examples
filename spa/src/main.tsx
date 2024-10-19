import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { matchLocation, BrowserRouter } from "enrouter";

import "./index.css";

async function main() {
  const match = await matchLocation(window.location.pathname);

  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter match={match} />
    </StrictMode>
  );
}

main();
