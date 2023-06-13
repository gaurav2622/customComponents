import React, { useState } from "react";

const ZoomableImage = () => {
  const [scale, setScale] = useState(1);

  const handleZoomChange = (event) => {
    const newScale = parseFloat(event.target.value);
    setScale(newScale);
  };

  const handleZoomIn = () => {
    setScale(scale + 0.1);
  };

  const handleZoomOut = () => {
    if (scale > 0.1) {
      setScale(scale - 0.1);
    }
  };

  return (
    <div>
      <div style={{ transform: `scale(${scale})` }}>
        <h1>Content</h1>
      </div>
      <div className="d-flex justify-content-end align-items-center border-top border-bottom">
        <div>
          <button onClick={handleZoomOut}>
            <i className="bi bi-dash"></i>
          </button>
        </div>
        <div className="px-2">
          <input
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={scale}
            onChange={handleZoomChange}
          />
        </div>
        <div>
          <button onClick={handleZoomIn}>
            <i className="bi bi-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ZoomableImage;
