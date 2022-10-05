import React from "react";
import ResponsiveAppBar from "./components/Navbar";
import { ProductosList } from "./components/ProductosList";
import { Routes, Route, Navigate } from "react-router-dom";
import { Contacto } from "./components/Contacto";
import { Home } from "./components/Home";
import { ProductoPage } from "./components/ProductoPage";

export const TurismoApp = () => {
	return (
		<>
			<ResponsiveAppBar />
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="productos" element={<ProductosList />}></Route>
				<Route path="productos/:productoId" element={<ProductoPage />}></Route>
				<Route path="contacto" element={<Contacto />} />
				<Route path="/" element={<Navigate to="/" />}></Route>
			</Routes>
		</>
	);
};
