import React, { Fragment } from 'react';

export default function IdCard(props) {
  const birthDate = props.birth.toString().slice(0,15);
  return (
    <Fragment>
      <div className="App">
      <img src={props.picture} alt='{props.firstName}'/>
        <p>First Name: {props.firstName}</p>
        <p>Last Name: {props.lastName}</p>
        <p>Gender: {props.gender}</p>
        <p>Height: {props.height}</p>
        <p>Birth: {birthDate}</p>
      
      </div>
    </Fragment>
  );
}
