import React from "react";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";

const MenuItemWithLink = ({ to, icon, title, selected, setSelected }) => {
  const mainFunc = (baseUrl) => {
    const protocol = "https";

    return (path) => {
      return `${protocol}://${baseUrl}/${path}`;
    };
  };
  const createSiteUrl = mainFunc("mysite.com");
  console.log(createSiteUrl("login"));
  return (
    <MenuItem
      icon={icon}
      active={selected === title}
      onClick={() => setSelected(title)}
      routerLink={<Link to={to} />}
    >
      <Link to={to}>{title}</Link>
    </MenuItem>
  );
};

export default MenuItemWithLink;
