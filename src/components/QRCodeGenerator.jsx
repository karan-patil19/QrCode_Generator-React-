// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import '../QRCodeGenerator.css';



const QRCodeGenerator = () => {
   
    
  const [text, setText] = useState('');
  const [size, setSize] = useState(100);
  const [showQRCode, setShowQRCode] = useState(false);

  const handleGenerate = () => {
    if (text.length > 0) {
      setShowQRCode(true);
    } else {
        
      alert('Enter The Input');
    }
  };

  const handleDownload = () => {
    const canvas = document.querySelector('canvas');
    const pngUrl = canvas
      .toDataURL('image/png')
      .replace('image/png', 'image/octet-stream');
    let downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = 'QR_Code.png';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    
    
    <div className="box">
      <div className="qr-header">
        <h1>Generate QR Code</h1>
        <input
          type="text"
          id="qr-text"
          placeholder="Type your text or URL"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div>
          <label htmlFor="sizes">Select Size</label>
          <select
            id="sizes"
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
          >
            {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000].map((s) => (
              <option key={s} value={s}>
                {s}X{s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="qr-body">
        {showQRCode && (
          <QRCode
            value={text}
            size={size}
            bgColor="#fff"
            fgColor="#000"
            includeMargin={true}
            level="Q"
            style={{ maxWidth: '100%', height: 'auto', width: 'auto' }}
          />
        )}
      </div>
      <div className="qr-footer">
        <button id="generate" onClick={handleGenerate}>
          Generate
        </button>
        <button
          id="download"
          onClick={handleDownload}
          disabled={!showQRCode}
        >
          Download
        </button>
      </div>
    </div>
  );
};

export default QRCodeGenerator;
