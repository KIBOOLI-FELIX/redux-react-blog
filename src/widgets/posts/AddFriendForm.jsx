import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch } from "react-redux";
import { addFriend } from "./postsSlice";
const AddFriendForm = () => {
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const dispatch = useDispatch();
  const onSaveName = (event) => {
    setName(event.target.value);
  };
  const onSaveContent = (event) => {
    setContent(event.target.value);
  };
  const saveFriend = (event) => {
    event.preventDefault();
    if (name && content) {
      dispatch(addFriend(name, content));
      setName("");
      setContent("");
    }
  };
  return (
    <div className="container">
      <h2>Add Friend</h2>
      <form method="POST">
        <div className="row">
          <div className="col-md-6">
            <label htmlFor="friendName">Name:</label>
            <input
              type="text"
              className="form-control"
              id="friendName"
              name="friendName"
              value={name}
              onChange={onSaveName}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="content">Talk about friend</label>
            <textarea
              className="form-control"
              name="friendContent"
              id="friendContent"
              value={content}
              onChange={onSaveContent}
            ></textarea>
          </div>
        </div>
        <row>
          <div>
            <button className="btn btn-primary btn-sm" onClick={saveFriend}>
              Save Friend
            </button>
          </div>
        </row>
      </form>
    </div>
  );
};

export default AddFriendForm;
