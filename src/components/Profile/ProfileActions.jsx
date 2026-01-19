import { useDispatch, useSelector } from 'react-redux';
// import { unfriend } from './../../redux/features//requests/requestSlice';
import { useNavigate } from 'react-router-dom';
import {
  acceptRequest,
  cancelRequest,
  createRequest,
} from './../../redux/features/requests/requestThunks';

const ProfileActions = ({ user, isOwner }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { requests } = useSelector((state) => state.requests);

  if (isOwner) {
    return (
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
        onClick={() => navigate('/settings')}
      >
        Edit Profile
      </button>
    );
  }

  // Check friendship status
  const request = requests.find((req) => req.userId === user._id);

  return (
    <div className="flex gap-2">
      {!request && (
        <button
          className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700"
          onClick={() => dispatch(createRequest(user._id))}
        >
          Add Friend
        </button>
      )}

      {request?.status === 'pending' && (
        <>
          <button
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            onClick={() => dispatch(acceptRequest(user?._id))}
          >
            Accept
          </button>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={() => dispatch(cancelRequest(user?._id))}
          >
            Cancel
          </button>
        </>
      )}

      {request?.status === 'friends' && (
        <>
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={() => navigate(`/messenger?to=${user._id}`)}
          >
            Message
          </button>
          <button
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            onClick={() => dispatch(cancelRequest(user._id))}
          >
            Unfriend
          </button>
        </>
      )}
    </div>
  );
};

export default ProfileActions;
