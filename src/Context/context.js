import { createContext, useContext, useState } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [pageId, setPageId] = useState();
  const [open, setOpen] = useState(true);

  const openNavbar = () => {
    setOpen(true);
  };
  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ open, openNavbar, closeNavbar, pageId, setPageId }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
