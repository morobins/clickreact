import React from "react";

const Navbar = props => (
<div>
  <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand">{props.title}</a>
  <span className="navbar-text">Score:
  {props.score}
</span>
<span className="navbar-text">High Score: 
{props.highscore}
</span>
</nav>
</div>

)

export default Navbar;
