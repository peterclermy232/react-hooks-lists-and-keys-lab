import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

 anchors = links.map((links) =>
y={link} href={"#" + link}>
    {link}
    )
  return (<nav>
    {/* display an <a> tag for each link here */}

    </nav>);
}

export default NavBar;
