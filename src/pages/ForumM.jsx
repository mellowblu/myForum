import React from "react";
import "../css/fmodal.css";

const ForumM = () => {
  return (
    <>
      <div
        className="modalSec modal fade"
        id="discussionDetailModal"
        tabindex="-1"
        aria-labelledby="discussionDetailModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modalCont modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="discussionDetailModalLabel">
                Discussion Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div id="discussionDetailContent"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForumM;
