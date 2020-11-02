import React from "react";

/* Importar los componentes */
import Logo from "./logo"
import SearchBar from "./search-bar"
import Icon from "./icon"
import Login from "./login"

/* Importar los iconos */
import videocamIco from "../icons/iconfinder_ic_videocam_48px_3669181.png";
import viewIco from "../icons/iconfinder_ic_view_module_48px_3669149.png";
import bellIco from "../icons/iconfinder_icon-ios7-bell_211694.png";

export default function Navbar(props) {
  return (<div className="navbar">
    <Logo logo={props.logo} />
    <SearchBar />
    <Icon iconUrl={videocamIco} />
    <Icon iconUrl={viewIco} />
    <Icon iconUrl={bellIco} />
    <Login />
  </div>)
}
