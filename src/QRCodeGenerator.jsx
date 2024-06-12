// src/QRCodeGenerator.js
import React, { useState } from "react";
import QRCode from "qrcode.react";
import DOMPurify from "dompurify";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState("");

  const handleChange = (event) => {
    const sanitizedInput = DOMPurify.sanitize(event.target.value);
    if (sanitizedInput.length <= 256) {
      setInputText(sanitizedInput);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>QR Code Generator</h1>
      <input
        type="text"
        placeholder="Enter text to encode"
        value={inputText}
        onChange={handleChange}
        style={{ padding: "10px", width: "250px" }}
      />
      <div style={{ marginTop: "20px" }}>
        {inputText && <QRCode value={inputText} />}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
