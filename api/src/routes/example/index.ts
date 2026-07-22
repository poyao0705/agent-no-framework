import type { FastifyPluginAsync } from "fastify";

const example: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
	// fastify.get("/", async (request, reply) => "this is an example");
	fastify.get("/", async (request, reply) => {
		return reply.view("index", { title: "Home" });
	});
	fastify.get("/user-profile", async (request, reply) => {
		const user = { name: "Alex", role: "Developer" };

		// Send back just the snippet without a layout wrapper
		return reply.view("partials/profile", { user });
	});
};

export default example;
