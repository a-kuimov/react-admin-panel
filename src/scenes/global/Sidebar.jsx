import { useState } from "react";
import { Sidebar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";

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

const SidebarApp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const { collapseSidebar, collapsed } = useProSidebar();
  const [selected, setSelected] = useState("Dashbord");

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
              ".menu-anchor:hover": {
                color: "#868dfb",
              },
            })}
          >
            <MenuItem
              onClick={() => collapseSidebar()}
              icon={collapsed ? <MenuOutlinedIcon /> : <MenuOpenRoundedIcon />}
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
            {!collapsed && (
              <Box mb="25px">
                <Box display="flex" alignItems="center" justifyContent="center">
                  <img
                    src={`../../assets/images/avatar.jpg`}
                    alt="avatar"
                    width="100px"
                    height="100px"
                    style={{ cursor: "pointer", borderRadius: "50px" }}
                  />
                </Box>
                <Box textAlign="center">
                  <Typography
                    variant="h2"
                    color={colors.gray[100]}
                    fontWeight="bold"
                    sx={{ m: "10px 0 0 0" }}
                  >
                    Ed Roth
                  </Typography>
                  <Typography variant="h5" color={colors.greenAccent[500]}>
                    Admin
                  </Typography>
                </Box>
              </Box>
            )}
            <MenuItem icon={<HomeOutlinedIcon />}>
              {" "}
              <Link to="/">Dashbord</Link>{" "}
            </MenuItem>
            <MenuItem icon={<PeopleOutlinedIcon />}>
              {" "}
              <Link to="/team">Team</Link>{" "}
            </MenuItem>
          </Menu>
        </Sidebar>
      </div>
    </Box>
  );
};

export default SidebarApp;
