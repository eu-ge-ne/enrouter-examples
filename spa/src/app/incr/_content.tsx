import { useState } from "react";

export default {
  Incr,
}

function Incr() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app/incr/_content.tsx</code> and save to test HMR
      </p>
    </>
  );
}
