import React from "react";

export default function BookList(props) {
  const { title, description } = props;
  return (
    <div className="card col-md-4 mt-3">
      <img
        src="https://loremflickr.com/320/240"
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
      </div>
    </div>
  );
}
