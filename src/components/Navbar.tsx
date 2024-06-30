import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div className="flex justify-around items-center bg-primary text-[#222] h-16">
        <Link
          to="/"
          className="md:text-3xl text-2xl font-bold hover:underline "
        >
          Home
        </Link>
        <Link
          to="/about"
          className="md:text-3xl text-2xl font-bold hover:underline "
        >
          About
        </Link>
        <Link
          to="/projects"
          className="md:text-3xl text-2xl font-bold hover:underline "
        >
          Projects
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
