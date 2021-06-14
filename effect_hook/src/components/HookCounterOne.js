import React, { useState, useEffect } from "react";

function HookCounterOne() {
  const initialCount = 0;
  const initialName = "";
  const [count, setCount] = useState(initialCount);
  const [name, setName] = useState(initialName);

  useEffect(() => {
    console.log(`Updating the document title.`);
    document.title = `You Clicked ${count} Times`;
  }, [count]);

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => setCount((previousCount) => previousCount + 1)}>
        Clicked {count} times
      </button>
    </div>
  );
}

export default HookCounterOne;
