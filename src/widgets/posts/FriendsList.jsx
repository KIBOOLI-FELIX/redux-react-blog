import { useSelector } from "react-redux";
import {selectAllFriends} from "./postsSlice";

const FriendsList=()=> {
  const friends=useSelector(selectAllFriends)
  const renderedFriends=friends.map(friend=>(
    <article key={friend.id}>
      <h3>{friend.name}</h3>
      <p>{friend.content}</p>
    </article>
  ))
 
  return (
    <section>
      <h2>Posts</h2>
      {renderedFriends}
    </section>
  )
}

export default FriendsList;
