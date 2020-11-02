import React from "react";

import Icon from "./icon"

export function Sidebar(props) {
  return (<div className="sidebar">
    <Icon iconUrl={props.icons.homeIcon} />
    <Icon iconUrl={props.fireIcon} />
    <Icon iconUrl={props.subscriptionsIcon} />
    <Icon iconUrl={props.playlist} />
  </div>)
}
