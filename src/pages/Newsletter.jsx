import React from "react";

const Newsletter = () => {
  return (
    <form className="form">
      <h4 style={{ textAlign: "center", marginBottom: "2rem" }}>
        Our newsletter
      </h4>
      <div>
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          className="form-input"
          name="name"
          id="name"
          defaultValue=""
        />
      </div>
    </form>
  );
};

export default Newsletter;
