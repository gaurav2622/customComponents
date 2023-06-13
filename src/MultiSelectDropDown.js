import React, { useState, useRef } from "react";

const CustomDropdown = ({ options, multipleSelect, chips }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (optionValue, checked) => {
    if (checked) {
      setSelectedOptions([...selectedOptions, optionValue]);
    } else {
      setSelectedOptions(
        selectedOptions.filter((value) => value !== optionValue)
      );
    }
  };

  return (
    <div ref={dropdownRef}>
      <div className="custom-dropdown-wrapper" onClick={handleDropdownToggle}>
        <div className="d-flex justify-content-between align-items-center">
          {!multipleSelect && selectedOptions.length > 0 && (
            <div>
              {selectedOptions
                .map((optionValue) => {
                  const selectedOption = options.find(
                    (option) => option.value === optionValue
                  );
                  return selectedOption ? selectedOption.label : "";
                })
                .join(", ")}
            </div>
          )}
          {selectedOptions.length === 0 && (
            <label className="pe-none">Select Options</label>
          )}
          <div className={chips ? "d-flex flex-row flex-wrap" : "without-chip"}>
            {selectedOptions.map((optionValue) => {
              const selectedOption = options.find(
                (option) => option.value === optionValue
              );
              return (
                <div key={selectedOption.value}>
                  <span
                    className={chips ? "selected-option" : ""}
                    title={selectedOption.label}
                  >
                    {selectedOption.label}
                  </span>
                </div>
              );
            })}
          </div>
          <div>
            {isOpen ? (
              <i className="bi bi-chevron-up"></i>
            ) : (
              <i className="bi bi-chevron-down"></i>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <ul className="custom-dropdown-option">
          {options.map((option) => (
            <li key={option.value}>
              <label>
                <input
                  type="checkbox"
                  checked={selectedOptions.includes(option.value)}
                  onChange={(e) =>
                    handleOptionSelect(option.value, e.target.checked)
                  }
                />
                {option.label}
              </label>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomDropdown;
