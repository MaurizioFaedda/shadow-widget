import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const queryParams = new URLSearchParams(window.location.search);
  const accommodationId = queryParams.get("AccommodationId");
  return (
    <>
      <p>I'm shadow-dom render!</p>
      <p>
        The accommodationId is <b>{accommodationId}</b>
      </p>

      <img
        src={
          "https://dev-crs-webapp-wa.azurewebsites.net/assets/LogoGif-CMlI8F_t.gif"
        }
        className="logo react"
        alt="React logo"
      />

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
