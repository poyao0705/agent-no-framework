import path from "node:path";
import fastifyStatic from "@fastify/static";
import fp from "fastify-plugin";

export default fp(async (fastify) => {
	await fastify.register(fastifyStatic, {
		root: path.join(import.meta.dirname, "../../public"),
		prefix: "/",
	});
});
