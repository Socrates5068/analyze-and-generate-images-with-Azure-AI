import React from 'react';

function App() {
  const value = 'Anita!! <3';
  const divStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
    gap: '15px',
  };

  const buttonStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '200px',
  };

  const inputStyle = {
    width: '400px',
  };

  const labelStyle = {
    display: 'block',
    marginBottom: '5px',
    textAlign: 'left',
  };

  return (
    <div style={divStyle}>
      <h1>Hola {value}</h1>
      <div>
        <label style={labelStyle}>Ingresa una URL o escribe algot:</label>
        <input style={inputStyle} type="text" placeholder="Ingresa una URL para analizarla o escribe un texto para generar una imagen" />
      </div>
      <div style={buttonStyle}>
        <button>Analize URL</button>
        <button>Generate</button>
      </div>
    </div>
  );
}

export default App;
