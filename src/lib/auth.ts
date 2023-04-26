import lucia from "lucia-auth";
import prisma from "@lucia-auth/adapter-prisma";
import { PrismaClient } from "@prisma/client";
import { astro } from "lucia-auth/middleware";

const env = process.env.NODE_ENV;
const dev = env === "development";
export const auth = lucia({
	adapter: prisma(PrismaClient),
	env: dev ? "DEV" : "PROD",
	middleware: astro()
});

export type Auth = typeof auth;
