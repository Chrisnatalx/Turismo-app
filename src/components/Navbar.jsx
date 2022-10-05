import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import { Link, NavLink } from "react-router-dom";
const pages = ["Productos", "Precios", "Contacto"];

const ResponsiveAppBar = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	return (
		<AppBar position="static">
			<Container maxWidth="xl">
				<Toolbar disableGutters>
					<ConnectingAirportsIcon
						sx={{ display: { xs: "6", md: "flex" }, mr: 1 }}
					/>
					<Typography
						variant="h6"
						sx={{
							mr: 2,
							display: { xs: "2", md: "flex" },
							fontFamily: "roboto",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "inherit",
							textDecoration: "none",
						}}
					>
						<NavLink to="/">TURISMOAPP</NavLink>
					</Typography>

					<Typography
						variant="h6"
						sx={{
							mr: 2,
							display: { xs: "2", md: "flex" },
							fontFamily: "monospace",
							fontWeight: 700,
							letterSpacing: ".1rem",
							color: "white",
							textDecoration: "none",
						}}
					>
						<NavLink to="/productos"> PRODUCTOS</NavLink>
					</Typography>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default ResponsiveAppBar;
