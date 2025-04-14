import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";
import { docsSchema } from "@astrojs/starlight/schema";
import { docsLoader } from "@astrojs/starlight/loaders";

const test = defineCollection({
    type: 'content_layer',
    loader: glob({ pattern: './src/content/test/*.md' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        logo: image()
    })
})

const docs = defineCollection({
    type: 'content_layer',
    loader: docsLoader(),
    schema: docsSchema()
})

export const collections = {
    docs,
    test
}
