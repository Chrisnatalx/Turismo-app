import React from "react";
import ProductoCard from "./ProductoCard";
import "../../src/styles.css";
import "animate.css";
import { Container, Grid } from "@mui/material";
import { productService } from "../services/productsService";

export const ProductosList = () => {
	const productos = productService.getAll();
	return (
		<Container sx={{ marginTop: 10 }}>
			<Grid
				container
				rowSpacing={8}
				columnSpacing={4}
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				{productos.map((producto) => (
					<Grid item xs={12} sm={6} md={4} key={producto.id}>
						<ProductoCard {...producto} />
					</Grid>
				))}
			</Grid>
		</Container>
	);
};
