import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass'],
    build: {
      transpile: ['vuetify'],
    },
    modules: [
        '@nuxt/content',
        '@nuxtjs/tailwindcss'
      ],
      content: {
        // https://content.nuxtjs.org/api/configuration
      }
})
