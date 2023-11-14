import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    isDraft: z.boolean().default(false).optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().default("Nealle Page"),
  }),
});

const authors = defineCollection({
  schema: z.object({
    name: z.string(),
  }),
});

export const collections = { blog, authors };
