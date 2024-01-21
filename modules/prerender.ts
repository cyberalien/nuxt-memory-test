import { defineNuxtModule } from "@nuxt/kit";

export default defineNuxtModule({
  setup(_options, nuxt) {
    nuxt.hook("prerender:routes", async ({ routes }) => {
      // Copy of data/config.ts
      const base = 36;
      const dirCount = 128;
      const fileCount = 512;

      routes.add("/");
      for (let i = 0; i < dirCount; i++) {
        const dirStr = i.toString(base);
        routes.add(`/${i.toString(base)}/`);
        for (let j = 0; j < fileCount; j++) {
          routes.add(`/${i.toString(base)}/${j.toString(base)}/`);
        }
      }
    });
  },
});
