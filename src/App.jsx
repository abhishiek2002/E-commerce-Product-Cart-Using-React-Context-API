import React from "react";
import { Outlet } from "react-router";
import Header from "./components/Header";
import { CardContextProvider } from "./contexts/CardContext";


const App = () => {
  return (
    <CardContextProvider>
      <Header />
      <Outlet />
    </CardContextProvider>
  );
};

export default App;
