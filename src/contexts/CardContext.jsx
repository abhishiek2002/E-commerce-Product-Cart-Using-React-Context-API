import { createContext, useContext, useState } from "react";

const CardContext = createContext(null);

export const CardContextProvider = ({ children }) => {
  const [item, setItem] = useState([]);
  return (
    <CardContext.Provider value={{ item, setItem }}>
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const data = useContext(CardContext);
  return data;
};

export default { useCardContext, CardContextProvider };
