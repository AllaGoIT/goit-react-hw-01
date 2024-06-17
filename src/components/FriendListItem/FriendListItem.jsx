import css from "./FriendListItem.module.css";

const FriendListItem = ({friend:{avatar, name, isOnline }}) => {
    return (
        <div className={css.container}>
            <img className={css.images} src={avatar} alt="Avatar" width="48" />
            <p className={css.textName}>{name}</p>
            <p className={css.textStatus}>{isOnline}</p>    
</div>

    )
};

export default FriendListItem;