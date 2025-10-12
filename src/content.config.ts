// 1. Import utilities from `astro:content`
import { defineCollection, z } from 'astro:content';
// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const creations = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/creations" }),
  schema: z.object({
    title: z.string(),
    blurb: z.string(),
    ctaLabel: z.string(),
    ctaHref: z.string(),
    tags: z.array(z.string()),
    featured: z.boolean().optional(),
    publishDate: z.coerce.date(),
    draft: z.boolean().optional(),
  }),
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = {
  creations,
};
