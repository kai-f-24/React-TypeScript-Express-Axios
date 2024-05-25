import React, { useEffect, useState } from "react";
import ReactDOM from 'react-dom'
import axios from "axios";

const App: React.FC = () => {
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/greeting")
      .then((response) => {
        setMessage(response.data.message);
        console.log(response);
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

ReactDOM.render(<App />, document.getElementById('root'))