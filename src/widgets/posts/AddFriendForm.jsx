import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch,useSelector} from "react-redux";
import { addFriend } from "./postsSlice";
import { selectAllUsers } from "../users/usersSlice";
const AddFriendForm = () => {
  const [name, setName] = React.useState("");
  const [content, setContent] = React.useState("");
  const [userId, setUserId] = React.useState(""); 

  const dispatch = useDispatch();
  const users=useSelector(selectAllUsers);

  const onAuthPost=(event)=>{
    setUserId(event.target.value)
  }
  const onSaveName = (event) => {
    setName(event.target.value);
  };
  const onSaveContent = (event) => {
    setContent(event.target.value);
  };
  const saveFriend = (event) => {
    event.preventDefault();
    if (name && content) {
      dispatch(addFriend(name, content,userId));
      setName("");
      setContent("");
    }
  };

  const canSave=Boolean(name) && Boolean(content) && Boolean(userId)
  const usersOptions=users.map((user)=>{
    return(
      <option key={user.id} value={user.id}>
        {user.name}
      </option>
    )
  })
  return (
    <div className="container">
      <h2>Add Friend</h2>
      <form method="POST">
        <div className="row">
          <div className="col-md-4">
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
          <div className="col-md-4">
            <label htmlFor="postAuthor">Author:</label>
            <select
              name="postAuthor"
              id="postAuthor"
              onChange={onAuthPost}
              value={userId}
              className="form-select"
            >
              <option value=''></option>
              {usersOptions}
            </select>
          </div>
          <div className="col-md-4">
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
            <button className="btn btn-primary btn-sm" onClick={saveFriend}  disabled={!canSave}>
              Save Friend
            </button>
          </div>
        </row>
      </form>
    </div>
  );
};

export default AddFriendForm;
