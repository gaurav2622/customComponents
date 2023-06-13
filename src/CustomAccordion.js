import React, { useState } from "react";

const CustomAccordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <div className="custom-accordion">
      {items.map((item, index) => {
        const isActive = index === activeIndex;
        return (
          <div
            key={index}
            className={`accordion-item ${isActive ? "active" : ""}`}
          >
            <div
              className="accordion-header"
              onClick={() => handleItemClick(index)}
            >
              {item.title}
              <span className="accordion-arrow">
                {isActive ? (
                  <i className="bi bi-caret-up-fill"></i>
                ) : (
                  <i className="bi bi-caret-down-fill"></i>
                )}
              </span>
            </div>
            {isActive && (
              <div className="accordion-content">{item.content}</div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CustomAccordion;
