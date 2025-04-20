import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="bg-blue-500  text-white font-mono p-3 shadow-md overflow-x-hidden">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl ml-1 md:ml-16 mt-1">
            <a href="#">Aaviskar</a>
          </h1>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              {menuOpen ? "✖" : "☰"}
            </button>
          </div>

          <ul className="hidden md:flex space-x-6 md:mr-16">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        {menuOpen && (
          <ul className="md:hidden flex flex-col space-y-3 mt-4">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Skills</a>
            </li>
            <li>
              <a href="#">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        )}
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
