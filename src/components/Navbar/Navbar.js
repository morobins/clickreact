import React from "react";

const Navbar = props => (
<div>
  <nav className="navbar navbar-light bg-light"></nav>
  <a className="navbar-brand">{props.title}</a>
  <span class="navbar-text">
  {props.score}
</span>
<span class="navbar-text">
{props.highscore}
</span>
</div>

)

export default Navbar;
