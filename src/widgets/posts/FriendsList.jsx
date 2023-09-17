import { useSelector } from "react-redux";
import {selectAllFriends} from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";

const FriendsList=()=> {
  const friends=useSelector(selectAllFriends)
  const renderedFriends=friends.map(friend=>(
    <article key={friend.id}>
      <h3>{friend.name}</h3>
      <p>{friend.content}</p>
      <p>
        <PostAuthor userId={friend.userId}/>
        <TimeAgo timestamp={friend.date}/>
      </p>
    </article>
  ))
 
  return (
    <section>
      <h2>My Friends</h2>
      {renderedFriends}
    </section>
  )
}

export default FriendsList;
