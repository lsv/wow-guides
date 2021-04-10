const BASEURL = '/wow-guides/'

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  router: {
    base: BASEURL,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hatchling - WOW Guide',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'msapplication-TileColor', content: '#2b5797' },
      { name: 'theme-color', content: '#ffffff' },
    ],
    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: `${BASEURL}apple-touch-icon.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: `${BASEURL}favicon-32x32.png`,
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: `${BASEURL}favicon-16x16.png`,
      },
      { ref: 'manifest', href: `${BASEURL}site.webmanifest` },
      {
        rel: 'mask-icon',
        href: `${BASEURL}safari-pinned-tab.svg`,
        color: '#2b5797',
      },
    ],
    script: [
      {
        innerHTML:
          'const whTooltips = {colorLinks: true, iconizeLinks: true, renameLinks: true};',
      },
      {
        src: 'https://wow.zamimg.com/widgets/power.js',
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    ['nuxt-buefy', { css: false }],
    '@nuxt/content',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  buefy: {
    defaultIconPack: 'mdi',
    materialDesignIconsHRef:
      'https://cdn.jsdelivr.net/npm/@mdi/font@5/css/materialdesignicons.min.css',
  },

  content: {
    liveEdit: false,
    fullTextSearchFields: [
      'title',
      'description',
      'slug',
      'text',
      'expansion',
      'zone',
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
