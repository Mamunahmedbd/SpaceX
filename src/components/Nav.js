import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/img/favicon.webp";

const Nav = () => {
  return (
    <nav className="nav flex flex-wrap items-center justify-between px-4 bg-black text-white">
      <Link
        className="flex flex-no-shrink items-center mr-6 py-3 text-grey-darkest"
        to="/"
      >
        <img
          className="h-10 mr-2 w-10"
          alt="logo"
          src={Logo}
          width="40px"
          height="40px"
        />
        <span className="font-semibold text-xl tracking-tight">
          SpaceX Explorer
        </span>
      </Link>

      <ul className="flex menu border-gray-500 border-b justify-end m-0 w-full md:border-none md:w-auto">
        <li className="border-t border-gray-500 md:border-none">
          <NavLink
            to="launches"
            className={({ isActive }) =>
              isActive
                ? " block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darkerk font-bold border border-white rounded-full bg-white text-black"
                : "block px-4 py-2 no-underline text-grey-darkest hover:text-grey-darker"
            }
          >
            Launches
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
