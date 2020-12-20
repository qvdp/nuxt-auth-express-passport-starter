module.exports = {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "nuxt-auth-passport-local",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "nuxt-auth-passport-local"
      }
    ],
    link: []
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Middleware(s) of pages
   */
  router: {
    middleware: ["auth"]
  },
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/auth"],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    baseURL: process.env.HOST
  },
  /*
   ** Auth module configuration
   ** https://auth.nuxtjs.org/guide/setup.html
   */
  auth: {
    strategies: {
      local: {
        token: {
          property: "token"
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: "user"
          // autoFetch: true
        },
        endpoints: {
          login: { url: "/api/auth", method: "post" },
          logout: { url: "/api/logout", method: "post" },
          user: { url: "/api/me", method: "get" }
        }
      }
    },
    redirect: {
      login: "/",
      logout: "/",
      home: "/private"
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  /*
   ** Server Middleware
   */
  serverMiddleware: ["~/api"]
};
