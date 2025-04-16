// create your App component here
import React, { useState, useEffect } from 'react';

function App() {
  const [dogImage, setDogImage] = useState(null); // State to store the dog image URL
  const [isLoading, setIsLoading] = useState(true); // State to manage loading status

  useEffect(() => {
    // Fetch data from the API
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json()) // Parse the JSON response
      .then((data) => {
        setDogImage(data.message); // Set the dog image URL
        setIsLoading(false); // Set loading to false after the image is fetched
      })
      .catch((error) => {
        console.error('Error fetching the dog image:', error);
        setIsLoading(false); // Stop loading in case of an error
      });
  }, []); // Empty dependency array ensures this runs only once when the component is mounted

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p> // Show loading message if still loading
      ) : (
        <img src={dogImage} alt="A Random Dog" /> // Display dog image once loaded
      )}
    </div>
  );
}

export default App;
