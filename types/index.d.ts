import { Vue } from 'nuxt-property-decorator'
import { Context } from '@nuxt/types'
import { NuxtAxiosInstance } from '@nuxtjs/axios'

declare global {
  type nuxtContext = Context & {
    $axios: NuxtAxiosInstance
  }
}
