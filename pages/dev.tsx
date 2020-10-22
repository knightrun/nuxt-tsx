import { CreateElement, VNode } from 'vue'
import { Component, Vue, namespace } from 'nuxt-property-decorator'

const { State, Getter, Action } = namespace('dev')

import '@/assets/styles/dev.scss'

@Component
export default class Dev extends Vue {
  @Getter('getId')
  readonly id!: string

  @Getter('getName')
  readonly name!: string

  @Getter('getCompany')
  readonly commpany!: string

  @Action('setData')
  readonly setData!: Function

  @Action('setTest')
  readonly setTest!: Function

  private benefit: string = 'basic'
  private flag: boolean = true
  private tag:string = 'div'
  private info:Todo = {
    id: 1234,
    name: 'DongHyun',
    commpany: '개발회사'
  }

  created() {
    process.server && console.log('created : server')
    process.client && console.log('created : client')

  }

  mounted() {
    console.log('mounted')
  }

  clickHandler() {
    this.setTest(this.info)
  }

  render(h: CreateElement): VNode {
    return (
      <div class="dev">
        <p>{ this.id }</p>
        <p>{ this.name }</p>
        <p>{ this.commpany }</p>

        <button type="button" onclick={ this.clickHandler }>test</button>
        <vc-link to={"/test"}> 페이지 이동 </vc-link>
      </div>
    )

    // return (
    //   h(
    //     this.tag,
    //     {
    //       class : this.flag ? 'flag' : '',
    //       attrs : {
    //         'data-flag' : true
    //       }
    //     },
    //     [
    //       <div>a</div>,
    //       <div>b</div>
    //     ]
    //   )
    // )
  }
}
