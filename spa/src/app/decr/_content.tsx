import { useState } from "react";

export default {
  Decr,
};

function Decr() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count - 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/app/decr/_content.tsx</code> and save to test HMR
      </p>
    </>
  );
}
