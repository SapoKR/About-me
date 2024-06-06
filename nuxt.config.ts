// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  router: {},
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon"
  ],
  ssr: false,
  nitro: {
    preset: "github-pages"
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
})
