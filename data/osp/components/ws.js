import { useEffect, useState } from 'react';
import WebSocket from 'websocket';

const WebSocketClient = ({ onMessage }) => {
  useEffect(() => {
    const client = new WebSocket.client();
    const ws = client.connect('ws://twoje-websocket-api');

    ws.on('connect', () => {
      console.log('WebSocket connected');
    });

    ws.on('message', (message) => {
      onMessage(message.utf8Data);
    });

    ws.on('error', (error) => {
      console.error('WebSocket error:', error);
    });

    ws.on('close', () => {
      console.log('WebSocket closed');
    });

    return () => {
      ws.close();
    };
  }, [onMessage]);

  return null;
};

export default WebSocketClient;
