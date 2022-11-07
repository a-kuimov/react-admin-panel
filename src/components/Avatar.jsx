import React, { memo } from "react";
import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";

const Avatar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  console.log("kkkk");
  return (
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
  );
};

export default memo(Avatar);
