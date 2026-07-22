import path from "node:path";
import { fileURLToPath } from "node:url";
import fastifyView from "@fastify/view";
import { Eta } from "eta";
import fp from "fastify-plugin";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default fp(async (fastify) => {
	await fastify.register(fastifyView, {
		engine: {
			eta: new Eta(),
		},
		templates: path.join(import.meta.dirname, "../views"), // go to previous directory so it does not point to plugin folder
		options: {
			// Uses .eta extension for templates instead of default .html
			extension: "eta",
		},
	});
});

// usage: fastify.view("")
