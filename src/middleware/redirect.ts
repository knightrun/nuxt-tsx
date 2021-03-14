import { Middleware } from '@nuxt/types'


const storeSetting: Middleware = async (context) => {
  const { store } = context
  const { dispatch } = store

  if ( process.client ) return ;

  /**
   * @description 서버사이드일 경우에만 실행
   */

  // 기기정보
  try {
    await dispatch('dev/setApi', context);
  } catch(e) {
    throw new Error(e)
  }
}

export default storeSetting
