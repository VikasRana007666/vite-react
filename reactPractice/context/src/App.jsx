import { useState } from "react";
import Level1 from "./Level1";
import { LevelContext } from "./Context";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <LevelContext.Provider value="Gamers">
        <div>
          <Level1 />
        </div>
      </LevelContext.Provider>
    </>
  );
}

export default App;
