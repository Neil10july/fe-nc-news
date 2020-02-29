import React from "react";
import NavBar from "./NavBar/NavBar";

const Header = props => {
  const { user, loggedIn } = props;
  return (
    <div>
      <h1>NC_News</h1>
      <NavBar user={user} loggedIn={loggedIn} />
    </div>
  );
};

export default Header;
