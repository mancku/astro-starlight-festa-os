// @ts-check
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: {
        ca: "Documentació Open Source",
        en: "Open Source Documentation",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      defaultLocale: "root", // optional
      locales: {
        root: {
          label: "Català",
          lang: "ca", // lang is required for root locales
        },
        en: {
          label: "English",
          lang: "en",
        },
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
