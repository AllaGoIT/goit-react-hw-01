import css from "./FriendListItem.module.css";

const FriendListItem = ({ friend: { avatar, name, isOnline } }) => {
    
    return (
        <div className={css.container}>
            <img className={css.images} src={avatar} alt="Avatar" width="48" />
            <p className={css.textName}>{name}</p>
            {isOnline === true?<p className={css.textStatusOn}>Online</p>:<p className={css.textStatusOff}>Offline</p> }
              
</div>

    )
};

export default FriendListItem;