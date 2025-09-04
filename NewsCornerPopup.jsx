import React from 'react';

function NewsCornerPopup({ news }) {
  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1050,
        width: '300px',
        background: 'white',
        border: '1px solid #dee2e6',
        borderRadius: '8px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        padding: '16px'
      }}
    >
      <h5>Notícias</h5>
      <ul style={{ paddingLeft: '20px', marginBottom: 0 }}>
        {news && news.length > 0 ? (
          news.map((item, idx) => <li key={idx}>{item}</li>)
        ) : (
          <li>Sem notícias disponíveis.</li>
        )}
      </ul>
    </div>
  );
}

export default NewsCornerPopup;
