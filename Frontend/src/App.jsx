import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [nombre, setNombre] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');

  const validarNombre = async () => {
    setError('');
    setMensaje('');

    if (!nombre.trim()) {
      setError('Por favor, ingresá un nombre.');
      return;
    }

    try {
      const res = await fetch(`http://localhost:3000/validar/${nombre}`);
      const data = await res.json();

      if (!data.valido) {
        setError('Nombre no válido.');
      } else {
        const saludoRes = await fetch(`http://localhost:3000/saludo/${nombre}`);
        const saludoData = await saludoRes.json();
        setMensaje(saludoData.mensaje);
      }
    } catch (err) {
      setError('Error al conectar con el servidor.');
    }
  };

  return (
    <div className="App">
      <h1>Bienvenido</h1>
      <input
        type="text"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
        placeholder="Ingresá tu nombre"
      />
      <button onClick={validarNombre}>Validar</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}
      {mensaje && <p style={{ color: 'green' }}>{mensaje}</p>}
    </div>
  );
}

export default App;

