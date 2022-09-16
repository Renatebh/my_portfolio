import { useState } from "react";
import "./App.css";
// import PrimaryButton from "./common/PrimaryButton";
import Home from "./pages/Home";

function App() {
  // const handleClick = () => {
  //   console.log("Er du våken?");

  // };
  const [adminMode, setAdminMode] = useState(false);

  return (
    <>
      <div className="App">
        <button onClick={() => setAdminMode(!adminMode)}>Hehe</button>
        <Home />
        {/* <PrimaryButton
          disableBtn={false}
          text="Klikk meg!"
          onclick={handleClick}
        />
        <PrimaryButton disableBtn={true} text="Ikke klikk på meg!" />

        <PrimaryButton
          text="Jeg har childreeen"
          disableBtn={false}
          onclick={handleClick}
        >
          <h1>fjdsfl</h1>
        </PrimaryButton> */}
      </div>
    </>
  );
}

export default App;
