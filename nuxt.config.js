export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'emploeeStatus',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [

    ],
    publicRuntimeConfig: {
        axios: {
            baseURL: "http://localhost:8000"
        }
    },

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/tailwindcss
        '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/auth-next',
    ],
    proxy: {
        '/laravel': {
            target: 'http://localhost:8000',
            pathRewrite: { '^/laravel': '/' }
        }
    },
    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        proxy: true,
        credentials: true, // this error -  changed it from Credential
        baseURL: "http://localhost:8000",


    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    auth: {
        strategies: {
            'laravelSanctum': {
                provider: 'laravel/sanctum',
                url: 'http://localhost:8000',
                endpoints: {
                    login: {
                        url: '/api/login'
                    },
                    logout: {
                        url: '/api/logout'
                    },
                    user: {
                        url: '/api/user'
                    },

                },
                redirect: {
                    login: 'auth/login',
                    logout: 'auth/login',
                    home: '/',
                    user: '/admin',
                },
            },

            // user: {
            //   property: false
            // }
        }
    },
}