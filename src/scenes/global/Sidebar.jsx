import { useCallback, useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

import Avatar from "../../components/Avatar";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlinedIcon from "@mui/icons-material/HelpOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenRoundedIcon from "@mui/icons-material/MenuOpenRounded";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import MenuItemWithLink from "../../components/MenuItemWithLink";

const SidebarApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashboard");

  console.log("render2");
  return (
    <Box
      sx={{
        ".sidebar-inner": {
          background: `${colors.primary[400]} !important`,
        },
      }}
    >
      <div style={{ display: "flex", height: "100%" }}>
        <Sidebar>
          <Menu
            renderMenuItemStyles={({ level, disabled, active }) => ({
              ".menu-icon": {
                backgroundColor: "transparent",
              },
              ".menu-anchor": {
                backgroundColor: "transparent",
                color: active ? "#8670fa" : "",
              },
              ".menu-anchor a": {
                color: active ? "#8670fa" : colors.gray[100],
                textDecoration: "none",
              },
              ".menu-anchor:hover": {
                color: "#868dfb",
              },
              ".menu-anchor:hover a": {
                color: "#868dfb",
              },
            })}
          >
            <MenuItem
              onClick={() => collapseSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> : <MenuOpenRoundedIcon />}
              routerLink={<Link to="/" />}
              style={{
                margin: "10px 0 20px 0",
                color: colors.gray[100],
              }}
            >
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3">ADMINIS</Typography>
              </Box>
            </MenuItem>
            {/* USER */}
            <Box style={{ display: !collapsed ? "block" : "none" }}>
              <Avatar />
            </Box>
            <MenuItemWithLink
              title="Dashboard"
              to="/"
              icon={<HomeOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItemWithLink
              title="Team"
              to="/team"
              icon={<PeopleOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <MenuItemWithLink
              title="Contacts"
              to="/contacts"
              icon={<ContactsOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Menu>
        </Sidebar>
      </div>
    </Box>
  );
};

export default SidebarApp;
