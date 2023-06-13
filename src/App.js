import React, { useState } from "react";
import CustomAccordion from "./CustomAccordion";
import CustomTabs from "./CustomTabs";
import CustomMultiSelectDropDown from "./MultiSelectDropDown";
import CustomPopover from "./PopOver";
import Page from "./IndexView";
import ZoomableImage from "./ZoomInOut";
import "./styles.css";
import QuizApp from "./Quiz";
import Shop from "./shop";

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = useState("false");
  const handleThemeChange = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  const themeClass = isDarkTheme ? "dark-theme" : "light-theme";

  const options = [
    { value: "1", label: "Oliver Hansen" },
    { value: "2", label: "Van Henry" },
    { value: "3", label: "April Tucker" },
    { value: "4", label: "James" },
    { value: "5", label: "October" },
    { value: "6", label: "May" }
  ];

  const accordionItems = [
    {
      title: "Accordion 1",
      content: "Content for Accordion 1"
    },
    {
      title: "Accordion 2",
      content: "Content for Accordion 2"
    },
    {
      title: "Accordion 3",
      content: "Content for Accordion 3"
    }
  ];
  const tabs = [
    {
      id: "tab1",
      label: "Tab 1",
      content: <div>This is the content of Tab 1</div>
    },
    {
      id: "tab2",
      label: "Tab 2",
      content: <div>This is the content of Tab 2</div>
    },
    {
      id: "tab3",
      label: "Tab 3",
      content: <div>This is the content of Tab 3</div>
    }
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="row mt-5">
          <div className={themeClass}>
            <div className="d-flex align-items-center justify-content-end theme-toggle mb-2">
              <span className="">
                <i class="bi bi-brightness-high"></i>{" "}
              </span>
              <input
                type="checkbox"
                checked={isDarkTheme}
                id="theme"
                onChange={handleThemeChange}
              />
              <label className="mx-2" htmlFor="theme"></label>
              <span className="">
                <i class="bi bi-moon-fill"></i>
              </span>
            </div>

            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">8. Custom Shopping Cart</h4>
                </div>
                <div className="box-body">
                  <Shop />
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">7. Custom Quiz App</h4>
                </div>
                <div className="box-body">
                  <QuizApp />
                </div>
              </div>
            </div>

            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">1. Custom Multiselect Dropdown</h4>
                </div>
                <div className="box-body">
                  <CustomMultiSelectDropDown
                    options={options}
                    multipleSelect={true}
                    chips={true}
                  />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">2. Custom Accordion</h4>
                </div>
                <div className="box-body">
                  <CustomAccordion items={accordionItems} />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">3. Custom Tabs</h4>
                </div>
                <div className="box-body">
                  <CustomTabs tabs={tabs} />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">4. Custom Popover</h4>
                </div>
                <div className="box-body">
                  <CustomPopover position="bottom" />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">5. Custom Diff. Page Views</h4>
                </div>
                <div className="box-body">
                  <Page />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="box">
                <div className="box-header">
                  <h4 className="box-title">6. Custom Zoom In and Out Page</h4>
                </div>
                <div className="box-body">
                  <ZoomableImage />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
