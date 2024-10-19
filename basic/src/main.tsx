import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as enrouter from 'enrouter';


async function main() {
  const match = await enrouter.createMatch({
    location: window.location.pathname,
  });

  createRoot(document.getElementById('root')!).render(
    <StrictMode>
      <enrouter.Browser match={match} />
    </StrictMode>,
  )
}

main();
