import Profile from '../Profile/Profile.jsx'
import * as userData from '../../userData.json';
import FriendList from '../FriendList/FriendList.jsx';
import * as friends from "../../friends.json";

function App () {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}

export default App;



