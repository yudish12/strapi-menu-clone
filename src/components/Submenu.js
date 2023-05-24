import React from "react";
import sublinks from "../data";
import { useGlobalContext } from "../Context/context";
const Submenu = () => {
  const { pageId } = useGlobalContext();
  const currentpage = sublinks.find((item) => item.pageId === pageId);
  return (
    <div className={currentpage ? "submenu show-submenu" : "submenu"}>
      <h5>{currentpage?.page}</h5>
      <div
        className="submenu-links"
        style={{
          gridTemplateColumns:
            currentpage?.links?.length > 3 ? "1fr 1fr" : "1fr",
        }}
      >
        {currentpage?.links?.map((link) => {
          const { id, url, label, icon } = link;
          return (
            <a key={id} href={url}>
              {icon}
              {label}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Submenu;
