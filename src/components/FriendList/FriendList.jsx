import FriendListItem from '../FriendListItem/FriendListItem.jsx';
import css from "./FriendList.module.css";

const FriendList = ({ friends }) => 
{
	return (
		<ul className={css.list}>
			{friends.map((item) =>
				<li key={item.id} className={css.listItem}>
					<FriendListItem friend = {item}
					/>
	</li> )}
</ul>

			)
}

export default FriendList;
