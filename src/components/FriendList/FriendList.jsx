import FriendListItem from '../FriendListItem/FriendListItem.jsx';
const FriendList = ({ friends }) => {
	return (
		<ul>
			{friends.map((item) =>
				<li key={item.id}>
					<FriendListItem friend={item} />
	</li> )}
</ul>

			)
}

export default FriendList;

