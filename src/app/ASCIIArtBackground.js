import React, { useEffect, useState } from 'react';

export default function ASCIIArtBackground() {
  const [asciiArt, setAsciiArt] = useState('');

  useEffect(() => {
    fetch('/bgart.txt')
      .then(response => response.text())
      .then(text => setAsciiArt(text))
      .catch(error => console.error('Error loading ASCII art:', error));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        opacity: 0.1,
        pointerEvents: 'none',
        whiteSpace: 'pre',
        fontFamily: 'monospace',
        fontSize: '8px',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {asciiArt}
    </div>
  );
}