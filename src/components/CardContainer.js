import React from "react"
import styled from "styled-components"


const PhotoOfTheDay = ({ date, title, url, explanation}) => {
  const Card = styled.div`
  width: 50%;
  height: 50%;
  border-radius: 24px;
  margin: 0 auto;
  padding: 5% 5%;
  background-color: white;
  color: black;
  display: flex;
  flex-direction: column;
  box-shadow: 5px 5px 15px 5px black;
`;
  const Image = styled.img`
  width: 100%;
`;
  const H1 = styled.h1`
  font-family: 'Brush Script MT', cursive;
  font-size: 4rem;
  `

  return (
      <Card>
        <div>
          <Image src={url} alt='Nasa' />
        </div>
        <h3>Date: {date}</h3>
        <H1>{title}</H1>
        <div>
          <p>{explanation}</p>
        </div>
      </Card>
    );
  };

  export default PhotoOfTheDay