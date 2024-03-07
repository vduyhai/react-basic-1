import { useState } from "react";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Hello</h1>
      <Button>hello wi</Button>
      <ButtonGradient />
    </>
  );
}

export default App;
