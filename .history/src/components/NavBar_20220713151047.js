import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {/* display an <a> tag for each link here */}
    <a href="#home" k>home</a>
    <a href="#about">about</a>
    <a href="#projects">projects</a>
    </nav>;
}

export default NavBar;
