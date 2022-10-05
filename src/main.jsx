import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./styles.css";
import { TurismoApp } from "./TurismoApp";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import CssBaseline from "@mui/material/CssBaseline";
const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={darkTheme}>
				<CssBaseline />
				<TurismoApp />
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
