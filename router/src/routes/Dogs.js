import { NavLink, Outlet } from "react-router-dom";
import { getDogs } from "../data";

function Dogs({ allActive }) {
  let dogs = getDogs();

  return (
    <div>
      <div className="flex justify-center w-full pt-10 pb-3 ml-2">
        {dogs.map((dog) => (
          <div className="flex flex-col mr-5" key={dog.id}>
            <div>
              <NavLink
                className={({ isActive }) =>
                  isActive || allActive ? "opacity-100" : "opacity-50"
                }
                to={`/dogs/${dog.name}`}
              >
                <img
                  className="rounded-full border-8 mb-3 w-72 opacity-inherit"
                  src={dog.img}
                  alt="special dog"
                />
              </NavLink>
            </div>
            <NavLink to={`/dogs/${dog.name}`}>{dog.name}</NavLink>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
}

export default Dogs;
