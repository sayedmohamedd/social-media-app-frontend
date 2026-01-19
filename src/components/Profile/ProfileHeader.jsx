import ProfileActions from './ProfileActions';

const ProfileHeader = ({ user, isOwner }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md">
      {/* Cover Photo */}
      <div className="h-48 bg-gray-200 rounded-t-lg">
        {user.coverPic && (
          <img
            src={user.coverPic.url}
            alt="cover"
            className="h-48 w-full object-cover rounded-t-lg"
          />
        )}
      </div>

      {/* Profile Info */}
      <div className="p-4 flex flex-col items-center">
        <img
          src={user.profilePic?.url || '/default-avatar.png'}
          alt={user.name}
          className="w-24 h-24 rounded-full border-4 border-white -mt-12"
        />
        <h2 className="text-xl font-semibold mt-2">{user.name}</h2>
        <p className="text-gray-600">{user.bio || 'No bio yet...'}</p>

        {/* Actions */}
        <div className="mt-4">
          <ProfileActions user={user} isOwner={isOwner} />
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
