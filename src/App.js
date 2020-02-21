import React, { useEffect, useState } from 'react';
import './index.css';
import PhotoOfTheDay from './components/CardContainer';
import axios from 'axios';


function App() {
  const [date, setDate] = useState();
  const [title, setTitle] = useState();
  const [url, setUrl] = useState();
  const [explanation, setExplanation] = useState();
  const apiKey = 'CecIldgQmXLCCTnr02fOh2srCshbmyIYKYPHc7EA';

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(response => {
        setDate(response.data.date);
        setTitle(response.data.title);
        setUrl(response.data.url);
        setExplanation(response.data.explanation);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className='App'>
      <p>
        <PhotoOfTheDay
          date={date}
          title={title}
          url={url}
          explanation={explanation}
        />
      </p>
    </div>
  );
}

export default App;