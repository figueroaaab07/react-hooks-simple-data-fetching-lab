// create your App component here
import React, { useState, useEffect } from "react";
// import { v4 as uuid } from "uuid";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [urlDog, setUrlDog] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          // console.log(result.message);
          setUrlDog(result.message);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <p>Loading...</p>;
  } else {
    return (
      <div>
        <img src={urlDog} alt="A Random Dog" />
      </div>
    );
  }
}

export default App;
