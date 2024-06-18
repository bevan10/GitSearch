import React from "react";

const Hero = ({ user }) => {
  return (
    <div>
      {user ? (
        <>
          <div className="flex gap-2 p-4 justify-between md:flex-row flex-col-reverse">
            <div className="w-full text-white font-mono font-semibold text-2xl">
              <div className="text-center">
                Profile Details
              </div>
              <div>
                Name:{user.name}
              </div>
              <div>
                Email:{user.email}
              </div>
              <div>
                Bio:{user.bio}
              </div>
              <div>
                Followers:{user.followers}
              </div>
              <div>
                Profile Link :
                <a href={user.html_url} className="bg-black">Click Here</a>
                
              </div>
            </div>
            <div className="flex justify-center items-center ">
              <img src={user.avatar_url} target="_blank" className="w-[500px] rounded-full  " alt="profile" />
            </div>
          </div>
        </>
        ) : (
        <>
          <div className=" flex h-screen w-full justify-center items-center font-mono font-extrabold text-4xl">
            Enter a Username to Fetch Details
          </div>
        </>
      )}
    </div>
  );
};

export default Hero;
