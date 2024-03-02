import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../contex";

function Navbar() {
  const { searchParam, setSearchParam, handelSubmit } =
    useContext(GlobalContext);

  return (
    <nav className=" flex  justify-between items-center ml-8 py-8 container gap-5 felx-col lg:flex-row lg:gap-0">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className=" text-black hover:text-gray-700 duration-300"
        >
          FOOD RECIPES
        </NavLink>{" "}
      </h2>
      <form action="" onSubmit={handelSubmit}>
        <input
          type="text"
          name="search"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
          placeholder="Enter Items..."
          className="bg-white/75 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-100 focus:shadow-red-200"
        />
      </form>
      <ul className="flex gap-5">
        <li>
          {" "}
          <NavLink
            to={"/"}
            className=" text-black hover:text-gray-700 duration-300"
          >
            Home{" "}
          </NavLink>{" "}
        </li>

        <li>
          {" "}
          <NavLink
            to={"/favorites"}
            className=" text-black hover:text-gray-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
