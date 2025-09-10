import { StrictMode, useCallback, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//#region Callbacks
function dispatch_count_updated(count: number): void {
  window.document.dispatchEvent(new CustomEvent('count_updated', { detail: { count } }));
}
//#endregion Callbacks

//#region Counter
function Counter() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    const new_count = count + 1;
    setCount(new_count);
    dispatch_count_updated(new_count);
  }, [count]);

  return (
    <div>
      <div>
        <h1>{count}</h1>
      </div>

      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
}
//#endregion Counter

//#region render
createRoot(document.getElementById('root')!).render(<StrictMode><Counter /></StrictMode>,);
//#endregion render
