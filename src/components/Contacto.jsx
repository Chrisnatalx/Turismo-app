import {
	Grid,
	TextField,
	Card,
	CardContent,
	Button,
	Container,
	FormControl,
	Select,
	MenuItem,
	InputLabel,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useState } from "react";

const opciones = [
	{
		id: -1,
		descripcion: "Seleccione",
	},
	{
		id: 1,
		descripcion: "Alojamiento",
	},
	{
		id: 2,
		descripcion: "Pasajes",
	},
	{
		id: 3,
		descripcion: "Solicito que me llamen",
	},
];

export const Contacto = () => {
	const [formData, setFormData] = useState({
		firstname: "",
		lastname: "",
		number: "",
		rol: -1,
	});
	const { firstname, lastname, number, rol } = formData;

	const handleOnChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setFormData({
			firstname: "",
			lastname: "",
			number: "",
			rol: "",
		});
	};

	return (
		<>
			<Container>
				<Box my={2}>
					<Grid>
						<Grid>
							<Card>
								<CardContent>
									<TextField
										error={false}
										label="Nombre"
										type="text"
										name="firstname"
										value={firstname}
										onChange={handleOnChange}
										margin="dense"
										fullWidth
										variant="outlined"
										helperText="Campo obligatorio"
									></TextField>
									<TextField
										error={false}
										label="Apellido"
										type="text"
										name="lastname"
										value={lastname}
										onChange={handleOnChange}
										margin="dense"
										fullWidth
										variant="outlined"
										helperText="Campo obligatorio"
									></TextField>
									<TextField
										error={false}
										label="Telefono"
										type="number"
										name="number"
										value={number}
										onChange={handleOnChange}
										margin="dense"
										fullWidth
										variant="outlined"
									></TextField>
									<FormControl margin="dense" sx={{ width: "100%" }}>
										<InputLabel id="demo-simple-select-label">
											Seleccione
										</InputLabel>
										<Select
											id="rol"
											name="rol"
											value={rol}
											fullWidth
											label="seleccione"
											onChange={handleOnChange}
										>
											{opciones &&
												opciones.map((opcion) => (
													<MenuItem key={opcion.id} value={opcion.id}>
														{opcion.descripcion}
													</MenuItem>
												))}
										</Select>
									</FormControl>
									<Button
										onClick={handleSubmit}
										variant="contained"
										type="submit"
									>
										Enviar
									</Button>
								</CardContent>
							</Card>
						</Grid>
					</Grid>
				</Box>
			</Container>
		</>
	);
};
