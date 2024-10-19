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
          label: "Països",
          translations: {
            en: "Countries",
          },
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Canada", slug: "paisos/canada" },
            {
              label: "Japó",
              slug: "paisos/japo",
              translations: { en: "Japan" },
            },
            { label: "Índia", slug: "paisos/india" },
          ],
        },
        {
          label: "Llenguatges",
          autogenerate: { directory: "llenguatges" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
