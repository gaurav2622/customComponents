import React from "react";

const IconView = () => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-between border p-2 rounded mb-2">
        <div>
          <img src="https://picsum.photos/60/60" alt="" title="" />
        </div>
        <div class="px-2">
          <h5 class="card-title">1. Card title</h5>
          <p class="card-text">With supporting text below as...</p>
        </div>
        <div>
          <button type="button" class="btn btn-primary">
            Read More..
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-between border p-2 rounded mb-2">
        <div>
          <img src="https://picsum.photos/60/60" alt="" title="" />
        </div>
        <div class="px-2">
          <h5 class="card-title">2. Card title</h5>
          <p class="card-text">With supporting text below as...</p>
        </div>
        <div>
          <button type="button" class="btn btn-primary">
            Read More..
          </button>
        </div>
      </div>
    </div>
  );
};

const OutlineView = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="border p-2 rounded mb-2">
            <div className="mb-2">
              <img
                src="https://picsum.photos/300/120"
                className="img-fluid"
                alt=""
                title=""
              />
            </div>
            <div class="py-2">
              <h5 class="card-title">1. Card title</h5>
              <p class="card-text">With supporting text below as...</p>
            </div>
            <div>
              <button type="button" class="btn btn-primary">
                Read More..
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-3 col-sm-6">
          <div className="border p-2 rounded mb-2">
            <div className="mb-2">
              <img
                src="https://picsum.photos/300/120"
                className="img-fluid"
                alt=""
                title=""
              />
            </div>
            <div class="py-2">
              <h5 class="card-title">1. Card title</h5>
              <p class="card-text">With supporting text below as...</p>
            </div>
            <div>
              <button type="button" class="btn btn-primary">
                Read More..
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PresentationView = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <h1>Presentation View</h1>
        </div>
      </div>
    </div>
  );
};

export { IconView, OutlineView, PresentationView };
