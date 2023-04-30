import { LevelContext } from "./Context";
import { useContext } from "react";

export default function Level3() {
  const title = useContext(LevelContext);

  return (
    <>
      <div>
        <h1>{title}</h1>
      </div>
    </>
  );
}
