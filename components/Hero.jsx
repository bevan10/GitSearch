import React from "react";

const Hero = ({ user }) => {
  return (
    <div>
      {user ? (
        <>
          <div className="flex flex-col gap-2">
            {user.name}
            {user.email}
            {user.bio}
            <img src={user.avatar_url} alt="profile" />
          </div>
        </>
      ) : (
        "No user"
      )}
    </div>
  );
};

export default Hero;
