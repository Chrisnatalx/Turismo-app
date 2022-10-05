import React from "react";
import { Alert, Container, Grid, Typography } from "@mui/material";
import Hoteles from "./Hoteles";

import { productService } from "../services/productsService";

export const Home = () => {
	const alojamientos = productService.getAlojamiento();
	return (
		<Container sx={{ marginTop: 3 }}>
			<Grid>
				<Alert variant="filled" severity="info">
					Hasta 12 Cuotas Sin interes !!!!
				</Alert>
				<Grid>
					<Typography align="center" variant="h1" component="h2">
						Las Mejores Ofertas
					</Typography>
					<hr />
				</Grid>
			</Grid>
			<Grid
				container
				rowSpacing={8}
				columnSpacing={4}
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				{alojamientos.map((alojamiento) => (
					<Grid item xs={12} sm={6} md={4} key={alojamiento.id}>
						<Hoteles {...alojamiento} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
