import React, { useState, useEffect, useRef } from "react";

const CustomPopover = ({ position }) => {
  const [showPopover, setShowPopover] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showPopover && !event.target.closest(".popover-content")) {
        setShowPopover(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopover]);

  const handlePopoverToggle = () => {
    setShowPopover(!showPopover);
  };

  const getPopoverStyle = () => {
    switch (position) {
      case "top":
        return { top: "-100%", left: "50%", transform: "translateX(-50%)" };
      case "right":
        return { top: "50%", right: "-100%", transform: "translateY(-50%)" };
      case "bottom":
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
      case "left":
        return { top: "50%", left: "-100%", transform: "translateY(-50%)" };
      default:
        return { top: "100%", left: "50%", transform: "translateX(-50%)" };
    }
  };

  return (
    <div className="custom-popover">
      <button onClick={handlePopoverToggle}>Open Popover</button>
      {showPopover && (
        <div className={`popover-content ${position}`}>
          <p>popover content!</p>
        </div>
      )}
    </div>
  );
};

export default CustomPopover;
