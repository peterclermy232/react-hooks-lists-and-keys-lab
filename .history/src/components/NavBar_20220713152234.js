import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const anchors = links.map((links) =>
  <a key={link} href={"#" + link}>
    {link})
  return (<nav>
    {/* display an <a> tag for each link here */}

    </nav>);
}

export default NavBar;
