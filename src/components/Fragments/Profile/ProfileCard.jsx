import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const ProfileCard = () => {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState(undefined);

  useEffect(() => {
    setDataUser(JSON.parse(localStorage.getItem("profile")));
  }, []);

  return (
    <>
      {dataUser ? (
        <div className="flex flex-col items-center justify-center w-full max-w-xs bg-white rounded-md shadow-md">
          <div className="px-4 py-4">
            <img
              src={dataUser.image}
              alt="avatar"
              className="rounded-full h-30"
            />
          </div>
          <div className="flex flex-col items-center justify-center py-4">
            <h1 className="text-xl font-bold">{dataUser.name}</h1>
            <h2 className="font-bold text-md">{dataUser.email}</h2>
            <p>{dataUser.created_at}</p>
          </div>
        </div>
      ) : (
        navigate("/")
      )}
    </>
  );
};

export default ProfileCard;
