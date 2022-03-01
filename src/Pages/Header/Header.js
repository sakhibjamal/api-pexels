import React from "react";
import Axios from "axios";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import SearchIcon from "@mui/icons-material/Search";
import { GrNotification } from "react-icons/gr";

const pages = ["Explore", "Licence"];
const settings = [
  "Your profile",
  "Your collections",
  "Settings",
  "Change language",
  "Logout",
];

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <Box
      sx={{
        objectFit: "cover",
        backgroundPosition: "right",
        backgroundRepeat: "no-repeat",
        background:
          "url(https://images.pexels.com/photos/9725698/pexels-photo-9725698.jpeg?auto=compress&cs=tinysrgb&fit=crop&fp-y=0.6&h=500&sharp=20&w=2000)",
      }}
    >
      <AppBar position="static" sx={{ backgroundColor: "transparent" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              sx={{ flexGrow: 1, marginLeft: "15px", fontSize: "22px" }}
            >
              <img
                src="https://images.pexels.com/lib/api/pexels-white.png"
                alt="logo"
                height="40"
              />
            </Typography>
            <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{
                    marginRight: "25px",
                    color: "white",
                    display: "block",
                    textTransform: "capitalize",
                    fontSize: "17px",
                    fontWeight: "300",
                  }}
                >
                  {page}
                </Button>
              ))}
            </Box>
            <IconButton
              sx={{
                " &. MuiButtonBase-root": {
                  color: "white",
                },
              }}
            >
              <GrNotification />
            </IconButton>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ mx: "25px" }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Button
              variant="contained"
              href="#"
              sx={{
                backgroundColor: "rgb(5, 160, 129)",
                textTransform: "capitalize",
                fontSize: "17px",
                fontWeight: "400",
              }}
            >
              Upload
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
      <Box paddingY={20} width="50%" margin="0 auto">
        <Typography
          variant="h4"
          component="h1"
          color="white"
          sx={{ marginBottom: "40px" }}
        >
          Photo by Jess Loiterton The best free stock photos, royalty free
          images & videos shared by creators.
        </Typography>
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search for free photos and videos"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        </Paper>
      </Box>
    </Box>
  );
}

export default Header;
