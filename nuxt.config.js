export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'y.jardin',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [['@nuxtjs/firebase']],

  firebase: {
    config: {
      apiKey: 'AIzaSyDvJFeA90n3XID0G8lqH2WD1tydpGUIpzo',
      authDomain: 'jardin-sauvages.firebaseapp.com',
      projectId: 'jardin-sauvages',
      storageBucket: 'jardin-sauvages.appspot.com',
      messagingSenderId: '819570240612',
      appId: '1:819570240612:web:c54c9a900c0b10d37f0371',
    },
    services: {
      auth: true, // Just as example. Can be any other service.
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
