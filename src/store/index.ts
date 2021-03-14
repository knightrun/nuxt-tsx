import { Store } from 'vuex/types'
import { Context } from '@nuxt/types'


export const actions = {
  // @ts-ignore
  async nuxtServerInit(store: Store<any>, context: Context) {
    console.log('======== START :: nuxt server init ========')
    const dispatch = store.dispatch
    await dispatch('dev/setStore', context)
  }
}
