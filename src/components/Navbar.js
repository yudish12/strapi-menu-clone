import React from "react";
import { FaBars } from "react-icons/fa";
import sublinks from "../data";
import { useGlobalContext } from "../Context/context";
const Navbar = () => {
  const { openNavbar, setPageId } = useGlobalContext();
  return (
    <nav>
      <div className="nav-desktop">
        <div className="logo">strapi</div>
        <div className="nav-items">
          {sublinks.map((e, i) => {
            return (
              <button
                key={e.pageId}
                className="nav-links"
                onMouseEnter={() => setPageId(e.pageId)}
                onMouseLeave={() => setPageId("")}
              >
                {e.page}
              </button>
            );
          })}
        </div>
      </div>
      <div onClick={openNavbar}>
        <FaBars className="bar-icon" />
      </div>
    </nav>
  );
};

export default Navbar;
