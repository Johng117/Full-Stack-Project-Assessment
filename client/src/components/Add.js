import React, { useState } from "react";

const Add = (props) => {
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");

  return (
    <div>
      <div>
        <form className="form-container" onSubmit={props.handleForm} action="" method="">
            <label>Title </label>
            <input
              name="title"
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            ></input>
            <label>URL </label>
            <input
              name="url"
              type="text"
              required
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            ></input>
            <div className="field-button-container">
              <button type="button" className="red" onClick={props.cancel}>
                Cancel
              </button>
              <button type="submit" className="green">
                Add
              </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default Add;
