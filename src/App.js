import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

import NasaPhoto from './Components/NasaPhoto'
// import styled, { keyframes } from 'styled-components';

// const kf = keyframes`
//   100%{
//     opacity: 1;
//     transform: scale(1) rotateZ(0);
//   }
// `

// NasaPhoto = styled.div`
// opacity:0;
// transform:scale(2) rotate(1080deg);
// animation: ${kf} 0.5s ease-in-out forwards;

// background-color: ${props => props.color ? props.color : "lemonchiffon"};
// p{
//   color: ${props => props.theme.tertiaryColor};
// }
// h2{
//   color: ${props => props.theme.primaryColor};
// }
// `

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(res =>{
      console.log(res);
      setData(res.data);
    })
    .catch(err => console.log(err))

  }, [])
  return (
    <div className="App">
      {data && <NasaPhoto photo={data} />}
    </div>
  );
}

export default App;
