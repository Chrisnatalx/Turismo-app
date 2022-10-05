import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { Box, CardActions, Grid, Rating } from "@mui/material";
import { NavLink, useParams } from "react-router-dom";
import { productService } from "../services/productsService";
import { Contacto } from "./Contacto";

export const ProductoPage = () => {
	const [value, setValue] = React.useState(4);
	const params = useParams();
	const producto = productService.getById(params.productoId);
	return (
		<Container sx={{ marginTop: 10 }}>
			<Grid
				container
				spacing={2}
				direction="row"
				alignItems="center"
				justifyContent="center"
			>
				<Grid item xs={12} sm={6} md={6} xl={6}>
					<Card sx={{ maxWidth: 400 }}>
						<CardMedia
							component="img"
							height="140"
							image={producto.url}
							alt={producto.destino}
						/>
						<CardContent>
							<Typography gutterBottom variant="h5">
								{producto.destino}
							</Typography>
							<Typography
								variant="body2"
								color="text.secondary"
								component="article"
							>
								<p>
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Voluptate odit excepturi dignissimos amet reprehenderit enim
									ut, atque sunt inventore saepe neque quod obcaecati quo autem
									placeat nostrum dolor doloremque voluptatem?
								</p>
							</Typography>
						</CardContent>
						<Grid
							container
							item
							xs={12}
							sx={{
								alignItems: "center",
								justifyContent: "center",
								justifyItems: "center",
							}}
						>
							<Typography component="legend">Valoracion</Typography>
							<Rating name="read-only" value={value} readOnly />
						</Grid>
						<CardActions>
							<Button fullWidth variant="contained">
								<NavLink to="/productos">Volver</NavLink>
							</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6} md={6} xl={6}>
					<Box>
						<Contacto />
					</Box>
				</Grid>
			</Grid>
		</Container>
	);
};
