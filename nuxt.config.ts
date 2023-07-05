// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/eslint-module"],
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
});
