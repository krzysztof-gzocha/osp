import { useState } from 'react';
import WebSocketClient from '../components/WebSocketClient';

export default function Home() {
  const [times, setTimes] = useState([]);

  const handleWebSocketMessage = (data) => {
    const parsedData = JSON.parse(data);
    setTimes((prevTimes) => [...prevTimes, parsedData]);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Drużyna Strażacka - Czas Wykonania Zadania</h1>
      <WebSocketClient onMessage={handleWebSocketMessage} />
      <ul style={styles.list}>
        {times.map((time, index) => (
          <li key={index} style={styles.listItem}>
            {new Date(time.timestamp).toLocaleTimeString()}: {time.duration} sekundy
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    backgroundColor: '#000',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    fontSize: '1.5rem',
  },
  listItem: {
    marginBottom: '0.5rem',
  },
};
