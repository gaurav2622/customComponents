import React, { useState } from "react";
import { IconView, OutlineView, PresentationView } from "./Views";

const Page = () => {
  const [currentView, setCurrentView] = useState("icon");
  const pageContent = "";
  const handleViewChange = (view) => {
    setCurrentView(view);
  };
  let viewComponent;
  switch (currentView) {
    case "icon":
      viewComponent = <IconView pageContent={pageContent} />;
      break;
    case "outline":
      viewComponent = <OutlineView pageContent={pageContent} />;
      break;
    case "presentation":
      viewComponent = <PresentationView pageContent={pageContent} />;
      break;
    default:
      viewComponent = null;
  }
  return (
    <div>
      <div className="">
        <div className="mb-4">{viewComponent}</div>
        <div className="d-flex justify-content-end border-top border-bottom">
          <ul className="list-unstyled mb-0 py-2">
            <li
              className="list-inline-item cursor-pointer"
              onClick={() => handleViewChange("icon")}
            >
              <i className="bi bi-list-ul"></i>
            </li>
            <li
              className="list-inline-item cursor-pointer"
              onClick={() => handleViewChange("outline")}
            >
              <i className="bi bi-image"></i>
            </li>
            <li
              className="list-inline-item cursor-pointer"
              onClick={() => handleViewChange("presentation")}
            >
              <i className="bi bi-easel2"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
