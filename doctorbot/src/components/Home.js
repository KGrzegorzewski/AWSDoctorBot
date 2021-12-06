import React from 'react';
import '../App.css';

const Form = () => {
    const handleSubmit = async (e) => {
      e.preventDefault();
      const elements = e.target.elements;
      const requestData = {
        username: elements.username.value,
        password: elements.password.value,
      };
      const requestJson = JSON.stringify(requestData);
      try {
        const response = await fetch("/path/to/backend", {
          method: "POST",
          body: requestJson,
        });
        const responseText = await response.text();
        console.log(responseText);
      } catch (ex) {
        console.error("POST - błąd!");
      }
    };
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Login: </label>
          <input type="text" name="username" />
        </div>
        <div>
          <label>Hasło: </label>
          <input type="password" name="password" />
        </div>
        <div>
          <input type="submit" value="Zatwierdź!" />
        </div>
      </form>
    );
  };

export default function Home() {
    return (
        <div className='home'>    
            <Form/>
        </div>
    );
  }