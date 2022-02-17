import React from 'react';
import styled, { css } from 'styled-components';
const StyledNasaPhoto = styled.div`
border: 10px solid;
border-color: coral;
background-color: ${props => props.color ? props.color : "lemonchiffon"};

h3{
    font-size: 8rem;
}

p{
    font-size: 2rem;
}
`
function NasaPhoto(props) {
    return (
        <StyledNasaPhoto className="nasa-photo-wrapper">
            <h3>{props.photo.title}</h3>
            <p>{props.photo.date}</p>
            <img src={props.photo.url} />
            <p className="explanation">{props.photo.explanation}</p>
        </StyledNasaPhoto>

    );
}

export default NasaPhoto;