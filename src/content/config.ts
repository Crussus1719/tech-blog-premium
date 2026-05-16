import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		seo_description: z.string().optional(),
		date: z.coerce.date(),
		image: z.string().optional(),
		author: z.string().default('Victor Hugo'),
		category: z.enum(['Apps e Dicas', 'Inteligência Artificial', 'Tecnologia Automotiva', 'Notícias Tech']).default('Notícias Tech'),
		tags: z.array(z.string()).default([]),
	}),
});

const pages = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
	}),
});

export const collections = { blog, pages };
