import React from 'react';



export default function Greetings(props) {
  const { lang, name } = props;
  let greeting = '';
  if (lang === 'en') {
    greeting = 'Hello ' + name;
  } else if (lang === 'de') {
    greeting = 'Hallo ' + name;
  } else if (lang === 'es') {
    greeting = 'Hola ' + name;
  } else if (lang === 'fr') {
    greeting = 'Bonjour ' + name;
  } else {
    greeting = 'Hello ' + name;
  }
  return (
    <div>

      <h1>{greeting}</h1>

    </div>
  );
}
