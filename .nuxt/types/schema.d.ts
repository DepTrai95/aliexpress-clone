import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["lodash"]?: typeof import("nuxt-lodash").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["piniaPersistedstate"]?: typeof import("@pinia-plugin-persistedstate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["pinia"]?: typeof import("@pinia/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["nuxt-lodash", Exclude<NuxtConfig["lodash"], boolean>] | ["@pinia-plugin-persistedstate/nuxt", Exclude<NuxtConfig["piniaPersistedstate"], boolean>] | ["@pinia/nuxt", Exclude<NuxtConfig["pinia"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {
   stripePk: string,

   persistedState: {
      storage: string,

      debug: boolean,

      cookieOptions: any,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }