import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import axios from "axios";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("/api/greeting")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>{ message }</h1>
      </header>
    </div>
  );
};

export default App;
