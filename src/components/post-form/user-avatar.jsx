

const UserAvatar = ({photo, name}) => {
  return <div>
    <img src={photo} alt={name}  className="size-[35px] md:size-[45px] rounded-full"/>
  </div>;
};

export default UserAvatar;
