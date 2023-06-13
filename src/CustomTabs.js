import React, { useState } from "react";

const CustomTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <div className="custom-tabs">
      <div className="tab-list d-flex">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-item ${tab.id === activeTab ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`tab-pane ${tab.id === activeTab && "active"}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomTabs;
