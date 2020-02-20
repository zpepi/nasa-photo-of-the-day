import React from "react"

const PhotoOfTheDay = ({ date, title, url, explanation}) => {
    
  return (
    <section class="card">
      <div>
        <img src={url} alt='Nasa'>
          </img>
      </div>
      <h3>Date: {date}</h3>
      <h3>{title}</h3>
      <div>
        <p>{explanation}</p>
      </div>
    </section>
  );
};

export default PhotoOfTheDay;