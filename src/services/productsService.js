import { alojamiento } from "../data/alojamiento/alojamiento";
import { productos } from "../data/productos";

const getAll = () => productos;

const getById = (id) => {
	return productos.find((x) => x.id === id);
};
const getAlojamiento = () => alojamiento;

export const productService = {
	getAll,
	getById,
	getAlojamiento,
};
