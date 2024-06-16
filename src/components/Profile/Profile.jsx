import css from "./Profile.module.css";

const Profile = ({ name, tag, location, image, stats }) => {
    return <div className={css.container}>
<div className={css.containerImage}>
 <img className={css.imageUser}
 src={image}
                alt="User avatar"
                width={100}
                height={100}
/>
            <p className={css.nameUser}>{name}</p>
            <p className={css.tagUser}>{tag }</p>
            <p className={css.locationUser}>{location}</p>
 </div>

<ul className={css.listActivities}>
            <li className={css.listItem}>
                 <span>Followers</span>
<span >{stats.followers}</span>
 
</li>
            <li className={css.listItem}>
                 <span>Views</span>
                
                <span >{stats.views}</span>

 </li>
            <li className={css.listItem}>
                 <span>Likes</span>
                <span >{stats.likes}</span>
 </li>
</ul>
</div>
};

export default Profile;