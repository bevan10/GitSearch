import { useState } from "react";

const Nav = ({ setUser }) => {
  const [value, setValue] = useState("");



  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(`Search for ${value}`);
    const res = await fetch(`https://api.github.com/users/${value}`);

    const data = await res.json();
    setUser(data);
    setValue("");
  };

  return (
    <div className="w-full m-0 min-h-[64px] p-3 md:p-0 bg-black text-white flex md:flex-row flex-col md:justify-between items-center">
      <h1 className="p-4 h-16 md:w-auto flex items-center font-bold font-serif text-3xl md:mr-auto text-center ">
        Git Search
      </h1>
      <div className="flex flex-row gap-2">
        <form onSubmit={handleSubmit}>
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            type="text"
            placeholder="Enter UserName"
            className="text-black border-none h-10 w-[270px] p-4  "
          />
          <button
            className=" bg-red-600  px-4 py-2 hover:bg-red-400 h-[41]"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Nav;
