import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";

type children = {
  children: React.ReactNode;
};

function Layout({ children }: children) {
  return (
    <div className="h-screen flex flex-col">
      <Nav />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
