import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { NavLink } from "react-router-dom";
import "animate.css";

export default function ProductoCard({ id, destino }) {
	const productoUrl = `/dist/foto${id}.jpg`;

	return (
		<Container>
			<Card>
				<CardMedia
					component="img"
					height="140"
					image={productoUrl}
					alt={destino}
				/>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{destino}
					</Typography>
					<Typography
						variant="body2"
						color="text.secondary"
						component="article"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
						odit excepturi dignissimos amet reprehenderit enim ut, atque sunt
						inventore saepe neque quod obcaecati quo autem placeat nostrum dolor
						doloremque voluptatem?
					</Typography>
				</CardContent>
				<CardActions sx={{ paddingY: 3 }}>
					<Button variant="contained" fullWidth>
						<NavLink to={`/productos/${id}`}>Ver mas</NavLink>
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
}
