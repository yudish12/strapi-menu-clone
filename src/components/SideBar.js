import React from "react";
import { useGlobalContext } from "../Context/context";
import { FaTimes } from "react-icons/fa";
import sublinks from "../data";
const SideBar = () => {
  const { open, closeNavbar } = useGlobalContext();
  return (
    <aside className={open ? "sidebar show-sidebar" : "sidebar"}>
      {open && (
        <div className="sidebar-container show-sidebar">
          <button onClick={closeNavbar} className="close-btn">
            <FaTimes />
          </button>

          <div className="sidebar-links">
            {sublinks.map((item) => {
              console.log(item);
              const { links, page, pageId } = item;
              return (
                <article key={pageId}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links.map((link) => {
                      const { url, icon, label, id } = link;
                      return (
                        <a key={id} href={url}>
                          {icon}
                          {label}
                        </a>
                      );
                    })}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
