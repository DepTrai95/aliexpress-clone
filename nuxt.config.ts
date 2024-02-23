// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    "nuxt-icon",
    "nuxt-lodash",
    "@pinia-plugin-persistedstate/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "@nuxtjs/tailwindcss",
  ],
  runtimeConfig: {
    public: {
      stripePk: process.env.STRIPE_PK_KEY
    }
  },
  supabase: {
    redirect: false,
  },
  app: {
    head: {
      script: [
        { src: 'https://js.stripe.com/v3', defer: true }
      ]
    }
  },
}) 
